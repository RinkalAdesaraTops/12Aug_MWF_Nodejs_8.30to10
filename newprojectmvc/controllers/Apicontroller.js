const CategoryModel = require("../models/categorymodel")

const catlist = async(req,res)=>{
    let result = await CategoryModel.find()
    if(result){
        return res.json({
            data:result,
            msg:"Successfully get categorylist"
        })
    } else{
        res.json({
            msg:"No data found",
            data:[]
        })
    }
}
const savecat = async(req,res)=>{
    let {catid,name} = req.body
    let result = ''
    if(catid != ''){
        result =await CategoryModel.findByIdAndUpdate(catid,{
            name:name
        })
    } else {
        result = new CategoryModel({
            name:name
        })
        result.save()       
    }
    if(result){
        res.json({msg:"Category save successfully..."})
    } else {
        res.json({msg:"Error found"})

    }
}
const delcat = async(req,res)=>{
    let id = req.params.id
    let result = await CategoryModel.findByIdAndDelete(id)
    if(result){
        res.json({msg:"Category deleted successfully..."})
    } else {
        res.json({msg:"Error found"})

    }
}
module.exports = {catlist,savecat,delcat}