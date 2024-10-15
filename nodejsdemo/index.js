const http = require('http') //core module
console.log("Hii hello");
const {add,minus} = require('./calc.js') //local module

http.createServer((req,res)=>{
    res.write("Hello Hii")
    console.log("Addition is "+add(3,5));
    res.end()
}).listen(4040,()=>{
    console.log('Listening on 4040 port');
})