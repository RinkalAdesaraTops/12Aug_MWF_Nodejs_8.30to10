const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/test_db')
//     .then(()=>console.log("Connected to DB..."))
const dbconnect = async()=>{
    await mongoose.connect('mongodb://localhost:27017/test_db')
         .then(()=>console.log("Connected to DB..."))
}
dbconnect()

const schema = mongoose.Schema
const categoryschema = new schema({
    name:String,
    image:String
})
const CatModel = mongoose.model('Category',categoryschema)

module.exports = CatModel

