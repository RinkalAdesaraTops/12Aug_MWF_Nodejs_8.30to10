const CategoryModel = require("../models/categorymodel")
const ProductModel = require("../models/productmodel")
const SubcatModel = require("../models/subcategorymodel")

const productfrm = async (req,res)=>{
    const result = await CategoryModel.find()
    res.render('product',{
        catlist:result,
    })
}
const getSubcategory = async(req,res)=>{
    let cid = req.params.cid
    let subcatlist = await SubcatModel.find({"category":cid})
    if(subcatlist){
        return res.json(subcatlist)
    }
    
}
module.exports = {productfrm,getSubcategory}