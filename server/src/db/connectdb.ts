import DBNAME from "../constants";

const mongose = require("mongoose");
require("dotenv").config;


export default async function connectDb (){

    try {

        const connectionInstance = await mongose.connect(`${process.env.MONGODB_URL}/todoapp`);
        
        console.log("connection to database established:"+ connectionInstance.connection.host);
        
    } catch (error) {
        console.log("connection to databse failed:" + error);
        
    }

}



