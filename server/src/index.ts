import express from "express";
import connectDb from "./db/connectdb";
import app from "./app";
require("dotenv").config();
connectDb().then(()=>{
    
    app.listen(process.env.PORT,()=>{console.log(" server running on 3000");

    })
});






