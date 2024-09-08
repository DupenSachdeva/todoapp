import { Request, Response } from "express";
import { user } from '../models/user.model';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import { customRequest } from "../middlewares/auth.middleware";
require("dotenv").config;


export const userSignup = async function userSignup(req:Request,res:Response) {
    try {
        const {name,password,email} = req.body;

    const userInstance = await user.findOne({name,email});
    
    
    if(userInstance){
        console.log(userInstance);
        
        return res.status(200).json({message: "user already exists"});
    }
      
   const hashedPassword = await hashPassword(password);

   const newuser = new user({
    name,
    email,
    password:hashedPassword
   })

   await newuser.save();
   const token = generateToken(name,password,newuser._id);

   
   res.status(200).send({message:"user created successfully",user:newuser,token})

    } 
    catch (error) {
        console.log(error);
        res.send(error)
        
    }
    

    
}


export const userLogin = async (req:Request,res:Response) => {
    try {
        const {name,password,email} = req.body;

    const userInstance = await user.findOne({name,email});
    console.log(userInstance);
    
    if(userInstance){
        const compare = bcrypt.compare(password,userInstance.password);
        if(!compare){
          return  res.status(200).send({"message":"incorrect password"});
        }
        const token = generateToken(name,password,userInstance._id);
        return res.status(200).send({userInstance,token});
    }
    res.status(200).send({message:"please sign up first"})
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
        
    }
    

}

export async function getUser(req:Request,res:Response) {
    try {
        const id = (req as customRequest).userId;

    const userInstance = await user.findOne({_id:id});
    if(!userInstance)
        return res.status(200).send("user does not exist");

    return res.status(200).send(userInstance);
    } catch (error) {
        console.log(error);
        
        return res.status(400).send(error)
    }
    
}


const hashPassword = async function hashPassword(password:string) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password,salt);
    
    return hashedPassword;
}

const generateToken =  function generateToken(name:string,password:string,id:Types.ObjectId){
           const SECRET = process.env.USER_SECRET;
           let token:string = "randomtoken";
           if(SECRET)
            token =  jwt.sign({id},SECRET,{expiresIn:"2hr"});
        
           return token;
}
