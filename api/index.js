import express from "express";
const app = express();
import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=>console.log("db connected"))
.catch((e)=>console.log(e));
app.listen(3000,(req,res)=>{
  console.log("server started...")
})