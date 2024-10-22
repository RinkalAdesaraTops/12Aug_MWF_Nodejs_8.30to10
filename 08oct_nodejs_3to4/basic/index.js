const express = require('express')
const app  = express()
app.get('/',(req,res)=>{
    res.send("My first express project")
})
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+"/home.html")
    // res.send("My home page")
})
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+"/about.html")
    // res.send("My home page")
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+"/contact.html")
    // res.send("My home page")
})
app.listen(4000,()=>{
        console.log("Listening on 4000 port");
})
// const http = require('http')
// const {add,minus} = require('./calc')
// //core module - http
// //third party module - nodemon
// http.createServer((req,res)=>{
//     console.log("Addition is "+add(35,25));
//     console.log("Minus is "+minus(35,25));
    
//     res.write("Hellooo    Hiiii")
//     res.end("connection close")
// }).listen(4000,()=>{
//     console.log("Listening on 4000 port");
// })