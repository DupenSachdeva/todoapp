import mongoose from "mongoose";
import { model, Schema, Types } from "mongoose";
import { Isubtodo, subTodoSchema } from "./subtodo.model";
import { ITag, tagSchema } from "./todotags.model";
import { IList, listSchema } from "./todolists";

export interface Iuser{
    name:String,
    email:string,
    password:string,
    todos:Isubtodo[],
    tags:ITag[],
    lists:IList[],
    createdAt:Date
}

const userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    todos:[subTodoSchema],
    tags:[tagSchema],
    lists:[listSchema]
},{timestamps:true})

export const user = model<Iuser>('user',userSchema);