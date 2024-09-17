var express = require('express')
var router = express.Router()
const {productfrm,getSubcategory} = require('../controllers/productcontroller')

router.get('/',productfrm)

router.get('/getSubcategory/:cid',getSubcategory)

module.exports = router