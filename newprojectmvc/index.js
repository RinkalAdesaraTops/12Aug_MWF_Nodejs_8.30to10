var express = require('express')
var app = express()
const adminRoutes = require('./routes/AdminRoutes')
const SubcatRoutes = require('./routes/subcatRoutes')

app.set('view engine','ejs')

app.use(express.urlencoded({ extended: false }));
var flash = require('express-flash'),
      express = require('express'),
      app = express();
 
  app.use(express.cookieParser('keyboard cat'));
  app.use(express.session({ cookie: { maxAge: 60000 }}));
  app.use(flash());
app.use("/admin",adminRoutes)
app.use("/subcategory",SubcatRoutes)

app.get("/",(req,res)=>{
    res.render('home')
})
app.listen(4000,()=>{
    console.log("listening on 4000 port");  
})

