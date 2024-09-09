
var express = require('express')
var app = express()
var router = express.Router()

const {dispcat,savecat,delcat,product} = require('../controllers/admincontroller')

router.get("/category",dispcat)
router.post("/savecat",savecat)
router.get("/delcat/:id",delcat)

router.get("/product",product)


module.exports = router

