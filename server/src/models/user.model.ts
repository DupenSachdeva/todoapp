import { Schema, Types } from "mongoose";

const mongoose = require("mongoose");

interface user{
    name:String,
    email:String,
    password:String,
    todos?:[Types.ObjectId]
}

const userSchema = new Schema<user>({
     name:{
        type:String,
        required:true
     },
     email:{
        typr:String,
        required:true
     },
     password:{
        type:String,
        required:true
     },
     todos:[{
        type:Schema.Types.ObjectId,
        ref:todo,
     }]
})
const user = mongoose.model("user",userSchema);
export default user;