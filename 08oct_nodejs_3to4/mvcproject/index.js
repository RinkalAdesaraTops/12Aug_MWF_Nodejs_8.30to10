var express = require('express')
 var app = express()
var catRoutes = require('./routes/categoryRoutes')
 app.set('view engine','ejs')
 app.get('/',(req,res)=>{
    res.render('home')
 })
app.use('/category',catRoutes)

 app.listen(4000,()=>{
    console.log("Listening on 4000 port");
    
 })
