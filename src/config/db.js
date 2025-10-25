import mongoose from "mongoose";
import env from 'dotenv';
env.config();

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL,{
      dbName:'zerodha'
    });
    console.log("Mongodb Connected Successfully!");
  } catch (error) {
    console.log("Connection Failed", error.message);
    process.exit(1);
  }
};

export  default ConnectDb;
