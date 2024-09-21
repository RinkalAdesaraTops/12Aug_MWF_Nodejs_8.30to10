const CatModel = require('../models/categorymodel')
const catfrm = (req,res)=>{
    res.render('category')
}
const savecat = async(req,res)=>{
    console.log(req.file);
    
    let {name} = req.body
    let result = new CatModel({
        name:name,
        image:req.file.filename
    })
    await result.save()
    if(result){
        res.redirect('/category')
    }

}


module.exports = {catfrm,savecat}