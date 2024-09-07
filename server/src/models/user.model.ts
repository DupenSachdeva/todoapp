import mongoose from "mongoose";
import { model, Schema, Types } from "mongoose";

interface Iuser{
    name:String,
    email:string,
    password:string,
    todos:Schema.Types.ObjectId[],
    createdAt:Date
}

const userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    todos:[{
        type:Schema.Types.ObjectId,
        ref:'subtodo'
    }]
},{timestamps:true})

export const user = model<Iuser>('user',userSchema);