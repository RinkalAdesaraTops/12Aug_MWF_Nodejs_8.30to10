var express = require('express')
const { add, display,deleteData,editData } = require('../controllers/CategoryController')
var router = express.Router()

router.get('/',display)
router.get('/del/:id',deleteData)
router.get('/edit/:id',editData)
router.post('/add',add)

module.exports = router