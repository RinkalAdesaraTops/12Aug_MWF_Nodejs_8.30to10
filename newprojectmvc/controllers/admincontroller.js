const CategoryModel = require('../models/categorymodel')

const dispcat = async(req,res)=>{
    let result = await CategoryModel.find()
    console.log(result);
    res.render('category',{
        'allcat':result
    })
}
const savecat = async(req,res)=>{
    let {name} = req.body
    console.log(req.body);
    
    let result = new CategoryModel({
        name:name
    })
    result.save()
    if(result){
        res.redirect('category')
    }
}
const delcat = async(req,res)=>{
    let id = req.params.id
    let result = await CategoryModel.findByIdAndDelete(id)
    if(result){
        res.redirect('/admin/category')
    }
}
const product = (req,res)=>{
    res.render('product')   
   
}
module.exports = {dispcat,savecat,delcat,product}