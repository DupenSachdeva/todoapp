import { model, Schema, Types } from "mongoose";
import { Iuser } from "./user.model";
import { ITag, tagSchema } from "./todotags.model";
import { IList, listSchema } from "./todolists";

export interface todoType{
    typeName:string,
    typeColour:string,
    typeCompleted:boolean
}
const todoTypeSchema = new Schema<todoType>({
    typeName:String,
    typeColour:String,
    typeCompleted:{
        type:Boolean,
        default:false
    }
})
export interface Isubtodo{
    name:string,
    description?:string,
    createdAt:Date,
    completed:Boolean,
    createdBy:Types.ObjectId,
    colour:string,
    todoType:string,
    todotag?:ITag[],
    dueDate : Date
}

export const subTodoSchema = new Schema<Isubtodo>({
    name:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    todoType:{
        type:String
    },
    todotag:[
        {
            type:tagSchema
        }
    ],
    dueDate:{
        type:Date,
        required:true
    }
    
},{timestamps:true})

export const subtodo = model<Isubtodo>('subtodo',subTodoSchema);

