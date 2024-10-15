console.log('hi');
console.log(10+20);
const { log } = require('console');
//core module -http 
//nodemon -- third party module
const http = require('http')
const { addition,minus} = require('./add')

http.createServer((req,res)=>{
    console.log("Addition is "+addition(25,6));
    console.log("Minus is "+minus(100,40));   
    res.write("Helloo")
    res.end()
}).listen(5002,()=>{
    console.log("listening to 5002 port");
})
//http.listen(5002)
