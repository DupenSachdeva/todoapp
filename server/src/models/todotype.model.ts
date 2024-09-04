import mongoose, { model, Schema } from "mongoose"
import { Types } from 'mongoose';
import { user } from "./user.model";

interface Itodotype{
    name:string,
    description?:string,
    createdBy:Schema.Types.ObjectId,
    createdAt:Date,
    updatedAt:Date,
    completed:boolean,
    colour:string,
}

const todoTypeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    completed:{
        type:Boolean,
        default:false
    },
    colour:String,
    
},{timestamps:true})



export const todoType = model<Itodotype>('todoType',todoTypeSchema);

