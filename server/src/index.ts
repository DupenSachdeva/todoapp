import app from "./app";
import connectDb from "./db/connectdb";
import user from "./models/user.model";
require("dotenv").config();


connectDb().then(()=>{
              console.log("connection to databse established and server running on" + process.env.PORT);
              })

console.log(typeof(user));




