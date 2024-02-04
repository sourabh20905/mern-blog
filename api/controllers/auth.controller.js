import User from "../models/user.model.js"
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const signup = async (req,res,next) => {
  try {
    const {username,email,password} = req.body;

    if(username == "" || email == "" || password == "" || !username || !email || !password){
      next(errorHandler(400,"All fields are required"))
    }
    const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({
      username,
      email,
      password:hashedPassword,
    })
    try {
      await newUser.save();
      res.json("signup successfully")
    } catch (err) {
      next(errorHandler(400,"User already present"));
    }
  

  } catch (err) {
     next(err);
  }
}

export const signin = async (req,res,next) => {
  const {email,password} = req.body;  
  if(!email || !password)  return next(errorHandler(400, "All fields are required"));
  try {
      const validUser = await User.findOne({email});
      if(!validUser) return next(errorHandler(404,"user not found"))
      const validPassword = bcryptjs.compareSync(password,validUser.password);
      if(!validPassword) return next(errorHandler(400,"Invalid Password"));
      const token = jwt.sign({
        userId:validUser._id,
        username:validUser.username 
      },
      process.env.JWT_SECRET,
      {expiresIn:"1h"}
      )
      const user = validUser.toObject();
      user.token = token;
      user.password = undefined;
      res.cookie("token", token).status(200).json({
        success: true,
        token,
        user,
        message: `User Login Success`,
      })
      
    } catch (error) {
      
    }
}