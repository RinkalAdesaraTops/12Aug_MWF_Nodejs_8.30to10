// /*
// 1)core module - inbuilt - http
// 2)Local module - custom - user defined
// 3)Third-party module - npm download - npm install pkgname
// */
// const http = require('http')
// const {add,area} = require('./add') //local module

// http.createServer((req,res)=>{
//     res.write("Hellooo...!!!")
//     res.write("Hiii...!!!")
//     res.write("Testing...!!!")
//     res.write("Addition is "+add(25,35))
//     res.write("Area of circle is "+area(2.5))
//     res.end()
// }).listen(3000,()=>{
//     console.log("listening on 3000 port");    
// })
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/home', function (req, res) {
    res.send('<h1>My Home Page</h1>')
  })
  app.get('/about', function (req, res) {
    res.send('<h1>My About Page</h1>')
  })

app.listen(4001)