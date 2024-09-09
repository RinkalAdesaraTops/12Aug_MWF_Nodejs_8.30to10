var express = require('express')
var app = express()
const adminRoutes = require('./routes/AdminRoutes')
app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }));

app.use("/admin",adminRoutes)
app.get("/",(req,res)=>{
    res.render('home')
})
app.listen(4000,()=>{
    console.log("listening on 4000 port");  
})

