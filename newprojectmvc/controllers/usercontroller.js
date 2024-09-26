const UserModel = require("../models/usermodel");
const bcrypt = require('bcrypt')
let saltRound = 12

const register = (req,res)=>{
    res.render('register')
}
const saveUser = async(req,res)=>{
    const {name,email,pwd} = req.body
    const salt = bcrypt.genSaltSync(saltRound);
    const hash = bcrypt.hashSync(pwd, salt);

    let result = new UserModel({
        name:name,
        email:email,
        password:hash
    })
    await result.save()
    if(result){
        res.redirect('/user/login') //routes calling
    }
}
const login = (req,res)=>{
    res.render('login') //ejs file
}
const checkLogin = async(req,res)=>{
    const {email,pwd} = req.body
    //pwd = 123456
    let result = await UserModel.find({email:email})
    if(result){
        let ans = bcrypt.compareSync(pwd,result.password); 
        if(ans){
            console.log("password done");
        } else {
            console.log("Invalid password");
        }
    } else {
        console.log("Invalid Email");
        
    }
    // bcrypt.compareSync(myPlaintextPassword, hash); // true
}

module.exports = {register,login,checkLogin,saveUser}
