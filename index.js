import express from "express";
import env from "dotenv";
import ConnectDb from "./src/config/db.js";
env.config();
const app  = express();


app.listen(3002,()=>{
    console.log("App started!");
    ConnectDb();
});