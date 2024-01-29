import express from "express";
const app = express();
import mongoose from "mongoose"
import dotenv from "dotenv";
import Userrouter from "./routes/user.route.js";
dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=>console.log("db connected"))
.catch((e)=>console.log(e));

app.use("/api/v1",Userrouter);
app.listen(3000,(req,res)=>{
  console.log("server started...")
})