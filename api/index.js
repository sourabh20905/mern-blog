import express from "express";
const app = express();
import mongoose from "mongoose"
import dotenv from "dotenv";
import Userrouter from "./routes/user.route.js";
import auth from "./routes/auth.route.js";
dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=>console.log("db connected"))
.catch((e)=>console.log(e));
app.use(express.json());
app.use("/api/v1",Userrouter);
app.use("/api/v1",auth);
app.listen(3000,(req,res)=>{
  console.log("server started...")
})