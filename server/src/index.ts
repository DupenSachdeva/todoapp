import app from "./app";
import connectDb from "./db/connectdb";
require("dotenv").config();


connectDb().then(()=>{
              console.log("connection to databse established and server running on" + process.env.PORT);
              })




