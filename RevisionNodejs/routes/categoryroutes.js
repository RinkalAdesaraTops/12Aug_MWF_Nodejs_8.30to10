var express = require('express')
var router = express.Router()
const {catfrm,savecat,deletecat,editcat} = require('../controllers/categorycontroller')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'./public/uploads')
    },
    filename: function (req, file, cb) {
        let addExtension = file.originalname.split('.') //abc.jpg = ['abc','jpg']
        
      const uniqueSuffix = Date.now()+'.'+addExtension[1]
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage })

router.get('/',catfrm)
router.post('/savecat',upload.single('image'),savecat)
router.get('/delcat/:id',deletecat)
router.get('/editcat/:id',editcat)


module.exports = router