import generateToken from "../config/token.js";
import User from "../models/user.model.js";

import bcrypt from "bcryptjs";
export const signup=async(req,res)=>{
    try {
        const {firstName,lastName,userName,email,password}=req.body;
        let existEmail=await User.findOne({email});
        if(existEmail){
            return res.status(400).json({message:"User already exists"});
        }

        let existUserName=await User.findOne({userName});
        if(existUserName){
            return res.status(400).json({message:"UserName already exists"});
        }

        let hashedPassword=await bcrypt.hash(password,10);

        const user=await User.create({
            firstName,
            lastName,
            userName,
            email,
            password:hashedPassword,
            
        })

        let token=generateToken(user._id);

        res.cookie('token',token,{
            httpOnly:true,
            maxAge:7*24*60*60*1000,
            secure:process.env.NODE_ENV==="development"?false:true,
            sameSite:"strict"
        })


       return res.status(201).json({
            message:"User created successfully",
            user
        })

        

        



    } catch (error) {
        console.error(error); // <-- log the actual error
        return res.status(500).json({
            message: "Signup error",
            error: error.message || error
        });
        
    }
}


export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User does not exists"});
        }

       

       const isMatchPassword=await bcrypt.compare(password,user.password);
       if(!isMatchPassword){
        return res.status(400).json({message:"Invalid credentials"});
       }



       

        let token=generateToken(user._id);

        res.cookie('token',token,{
            httpOnly:true,
            maxAge:7*24*60*60*1000,
            secure:process.env.NODE_ENV==="development"?false:true,
            sameSite:"strict"
        })


       return res.status(201).json({
            message:"Logged in successfully",
            user
        })

        

        



    } catch (error) {
        console.error(error); // <-- log the actual error
        return res.status(500).json({
            message: "Login error",
            error: error.message || error
        });
        
    }
}


export const logout=async(req,res)=>{
    try {
        res.clearCookie('token');
        return res.status(200).json({
            message:"Logged out successfully"
        })
        
    } catch (error) {
        console.error(error); 
        return res.status(500).json({
            message: "Logout Error",
            error: error.message || error
        });
        
        
    }
}