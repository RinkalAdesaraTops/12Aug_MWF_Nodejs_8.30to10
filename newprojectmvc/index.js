var express = require('express')
const session = require('express-session');
const flash = require('connect-flash');
var app = express()
const adminRoutes = require('./routes/AdminRoutes')
const SubcatRoutes = require('./routes/subcatRoutes')
const productRoutes = require('./routes/productRoutes')
app.set('view engine','ejs')
app.use(session({
    secret:'flashblog',
    saveUninitialized: true,
    resave: true
}));
  
app.use(flash());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

app.use("/admin",adminRoutes)
app.use("/subcategory",SubcatRoutes)
app.use("/product",productRoutes)


app.get("/",(req,res)=>{
    res.render('home')
})
app.listen(4000,()=>{
    console.log("listening on 4000 port");  
})

