var express = require('express')
var router = express.Router()

router.get('/',(req,res)=>{
    res.send("category file called")
})
app.get('/',(req,res)=>{
    res.send("hellooo")
})

module.exports = router