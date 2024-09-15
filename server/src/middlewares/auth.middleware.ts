import { Request ,Response,NextFunction } from "express";
import { Types } from "mongoose";
import jwt from 'jsonwebtoken';

export interface customRequest extends Request{
    userId : Types.ObjectId
}
export function authenticateUser(req:Request,res:Response,next:NextFunction) {
    
    try {
        const token = req.headers.authorization;
    if(!token) return res.status(400).send("access denied");

    const id = jwt.verify(token,process.env.USER_SECRET||"mySecret") as Types.ObjectId;
    (req as customRequest).userId = id;
    console.log(id);
    
     next();

    } catch (error) {
        console.log(error);
        
       return res.status(400).send(error);

    }
    


 

    
}