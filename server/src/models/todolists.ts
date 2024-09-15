import { model, Schema, Types } from "mongoose"
import { Isubtodo, subtodo } from "./subtodo.model"
import { Iuser } from "./user.model";

export interface IList{
    name:String,
    colour:String,
    user:Iuser
}

export const listSchema = new Schema({
    name:String,
    colour:String,
    user: {
        type:Types.ObjectId,
        ref:"user"    
    }
    

})

export const todolist = model('todolist',listSchema);