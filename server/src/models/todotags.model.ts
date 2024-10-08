import { model, Schema, Types } from "mongoose"
import { Isubtodo, subtodo } from "./subtodo.model"
import { Iuser } from "./user.model";

export interface ITag{
    name:string,
    colour:string,
    user:Types.ObjectId
}

export const tagSchema = new Schema({
    name:String,
    colour:String,
    user: {
        type:Types.ObjectId,
        ref:"user"    
    }
    

})

export const todotag = model('todotag',tagSchema);