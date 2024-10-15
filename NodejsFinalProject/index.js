// const http = require('http')
// http.createServer((req,res)=>{
//     res.end("Hello")
// }).listen(3001,()=>{
//     console.log("Listening on 3001 port");
// })
const express = require('express')
const app = express()
app.set('view engine','ejs')
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.get('/about',(req,res)=>{
    res.render('about')
})

app.listen(3002,()=>{
    console.log('listening on 3002 port');
})