import User from "../models/user.model.js"
import bcryptjs from "bcryptjs";
export const signup = async (req,res) => {
  try {
    const {username,email,password} = req.body;

    if(username == "" || email == "" || password == "" || !username || !email || !password){
      res.status(400).json({
        message:"All fields are required"
      })
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
    } catch (error) {
      res.json({
        message:error.message
      })
    }
   

    res.status(200).json({
      message:"success"
    })

  } catch (error) {
    res.json({
      message:"error",
      
    })
    console.log(error);
  }
}