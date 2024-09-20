var express = require('express')
var router = express.Router()

router.get('/',(req,res)=>{
    res.send("category file called")
})

module.exports = router