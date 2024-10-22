var express = require('express')
const { add, display } = require('../controllers/CategoryController')
var router = express.Router()

router.get('/',(req,res)=>{
    res.send('category list')
})
router.get('/add',add)
router.get('/disp',display)

module.exports = router