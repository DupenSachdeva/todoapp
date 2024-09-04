import mongoose from "mongoose";
import { model, Schema, Types } from "mongoose";
import { todoType } from './todotype.model';

interface Iuser{
    name:String,
    email:string,
    password:string,
    todoType:Schema.Types.ObjectId[],
    createdAt:Date
}

const userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    todoType:[{
        type:Schema.Types.ObjectId,
        ref:'todoType'
    }]
},{timestamps:true})

export const user = model<Iuser>('user',userSchema);