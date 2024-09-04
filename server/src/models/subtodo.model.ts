import { model, Schema } from "mongoose";

interface Isubtodo{
    name:string,
    description?:string,
    createdAt:Date,
    completed:Boolean,
    createdBy:Schema.Types.ObjectId
}

const subTodoSchema = new Schema({
    name:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:Schema.Types.ObjectId
    }
},{timestamps:true})

export const subtodo = model<Isubtodo>('subtodo',subTodoSchema);