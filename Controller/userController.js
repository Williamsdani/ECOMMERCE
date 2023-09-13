require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel=require("../Model/userModel")
//FUNCTIONALITIES FOR USER ALONE
//REGISTER USER
const singUp=async(req,res)=>{
    const email=req.body.email;
    const findUser=await User.findOne({email:email});
    if(!findUser){
        //create a new user
        const newUser=await User.create(req.body);
        res.json(newUser);
    }else{
        res.json({
            message:"User already exists",
            success:false,
        });
    }
};

module.exports={singUp};
