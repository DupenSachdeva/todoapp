import { Request, Response } from "express";
import { user } from '../models/user.model';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require("dotenv").config;


const userSignup = async function userSignup(req:Request,res:Response) {
    try {
        const {name,email,password} = req.body;

    const userInstance = await user.find({name,password});
    if(!userInstance){
        return res.status(200).json({message: "user already exists please sign up"});
    }

   const hashedPassword = hashPassword(password);
   const token = generateToken(name,password);
   const newuser = new user({
    name,
    email,
    password:hashedPassword
   })

   await newuser.save();
   
   res.status(200).send({message:"user created successfully",user:newuser})

    } 
    catch (error) {
        
    }
    

    
}
const hashPassword = async function hashPassword(password:string) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = bcrypt.hash(password,salt);
    
    return hashedPassword;
}

const generateToken =  function generateToken(name:string,password:string){
           const SECRET = process.env.USER_SECRET;
           let token:string = "randomtoken";
           if(SECRET)
            token =  jwt.sign({name,password},SECRET,{expiresIn:"2hr"});
        
           return token;
}