import mongoose from "mongoose";
import { model, Schema, Types } from "mongoose";
import { Isubtodo, subTodoSchema } from "./subtodo.model";

export interface Iuser{
    name:String,
    email:string,
    password:string,
    todos:Isubtodo[],
    createdAt:Date
}

const userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    todos:[subTodoSchema]
},{timestamps:true})

export const user = model<Iuser>('user',userSchema);