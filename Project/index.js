var express = require('express')
var app = express()
const { MongoClient, ObjectId } = require('mongodb');
const multer = require('multer')
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'ecommercedb';
// const {main,db} = require('./conn')
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        let name = file.originalname.split('.')
        const imgextension = name[1]
        const uniqueSuffix = Date.now() +'.'+imgextension
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })
let db;
const main = async()=>{
    await client.connect();
    console.log('Connected successfully to server');
    db = client.db(dbName);
}
main()
app.get("/",(req,res)=>{
    res.render('Home')
})
app.get("/category",async (req,res)=>{
   const collection = db.collection('categorytbl')
   //Display categorylist
   let catData = await collection.find().toArray()
   //category list send to ejs file
   res.render('Category',{
        'allcat':catData,
        'editcat':''
    })
})
app.post("/category", upload.single('image'),async(req,res)=>{
    const {catid,catname} = req.body
    const imgname = req.file.filename
    
   const collection = db.collection('categorytbl')
   let catData = await collection.find().toArray()
   if(catid != '') {
        id = new ObjectId(catid)
   }
   let result =''
   if(catid != ''){
    //update
    result = await collection.updateOne({_id:id},{$set : {name:catname}}) 
   } else {
    //insert
     result = await collection.insertOne({
        name:catname,
        image:imgname,
        id:catData.length > 0 ? catData.length+1 : 1
    }) 
   }
   
    if(result){
            res.redirect('/category')
    }   
})
app.get("/deleteCat/:id",async (req,res)=>{
    let id = req.params.id //get id as string
    const collection = db.collection('categorytbl')
    const objId = new ObjectId(id) //convert string id to object
    const result = await collection.deleteOne({_id:objId})
    const catData = await collection.find().toArray()
    let k=1
    catData.map(async (i)=>{
        await collection.updateOne({id:i.id},{$set:{id:k++}})
        // i.id = k++
        // return i
    })
    
    if(result){
        console.log("deleted successfully...");
        
        res.redirect('/category')
    } 
})

app.get("/editCat/:id",async (req,res)=>{
    let id = req.params.id //get id as string
    const collection = db.collection('categorytbl')
    const objId = new ObjectId(id) //convert string id to object
    const result = await collection.find({_id:objId}).toArray()
    
    let catData = await collection.find().toArray()
    res.render('category',{
        'editcat':(result.length > 0) ? result[0]:'',
        'allcat':catData
    })
    
})
app.listen(5000,()=>{
    console.log("Listening on Port 5000");  
})
