import express from "express";
import User from '../models/User.js'
const router=express.Router()

router.post("/register",async (req,res)=>{
    const {username,email,password,phone}=req.body
    const newuser=new User({username,email,phone,password})
        // console.log(newuser);
    try {
        
        const result=await newuser.save();
        // console.log(result);
        res.status(200).json('User registered successfully')
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post("/login",async (req,res)=>{
    const {luname,lpsw}=req.body
    try {
        const user= await User.find({username:luname,password:lpsw})
         console.log(user);
        // const x=user.filter(item=>(item.username===luname && item.password===lpsw))
        // console.log(x);
        if(user.length>0){
            res.status(200).json(user[0])
        }
       else{
        res.status(201).json('Invalid User')
       }
    } catch (error) {
        res.status(400).json(error)
    }
})


export default router