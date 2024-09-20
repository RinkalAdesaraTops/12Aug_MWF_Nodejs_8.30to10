var express = require('express')
var app = express()
let catRoutes = require('./routes/categoryroutes')

app.set('view engine','ejs')
app.use('/category',catRoutes)

app.get('/',(req,res)=>{
    res.send("hellooo")
})

app.listen(4000,()=>{
    console.log("Listening on 4000 port");   
})