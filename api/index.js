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
app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "error in internal server";
  res.status(statusCode).json({
    success : false,
    statusCode,
    message,

  })
}
)
// })
app.listen(3000,(req,res)=>{
  console.log("server started...")
})