const express = require('express')
const router = express.Router()

const {catlist,savecat,delcat} = require('../controllers/Apicontroller')
router.get('/categorylist',catlist)
router.post('/savecategory',savecat)
router.delete('/deletecategory/:id',delcat)


module.exports = router