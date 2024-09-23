const CatModel = require('../models/categorymodel')
const catfrm = async(req,res)=>{
    let catlist = await CatModel.find() 

    res.render('category',{
        'catlist':catlist,
        'editcat':''
    })
}
const savecat = async(req,res)=>{
    console.log(req.file);
    
    let {catid,name} = req.body
    let result=''
    let res_data = await CatModel.findById(catid)
    if(catid != ''){
        //update
        result = await CatModel.findByIdAndUpdate(catid,{
            name:name,
            image:req.file != undefined ? req.file.filename : res_data.image
        })
    } else {
        //insert
        result = new CatModel({
            name:name,
            image:req.file.filename
        })
        await result.save()
    }
   
    if(result){
        res.redirect('/category')
    }

}
const deletecat = async(req,res)=>{
    let id = req.params.id
    let result = await CatModel.findByIdAndDelete(id)
    if(result){
        res.redirect('/category')
    }
}
const editcat = async(req,res)=>{
    let id = req.params.id
    let catlist = await CatModel.find() 
    let result = await CatModel.findById(id)
    if(result){
        res.render('category',{
            catlist:catlist,
            editcat:result
        })
    }
}

module.exports = {catfrm,savecat,deletecat,editcat}