import { model, Schema, Types } from "mongoose"
import { Isubtodo, subtodo } from "./subtodo.model"

export interface ITag{
    name:String,
    colour:String,
}

export const tagSchema = new Schema({
    name:String,
    colour:String,
    
    

})

export const todotag = model('todotag',tagSchema);