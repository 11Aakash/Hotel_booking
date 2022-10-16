import express from "express";
import Hotel from '../models/Hotel.js'
const router=express.Router()

router.post("/",async (req,res)=>{
    const data=req.body
    try {
        const hotel=new Hotel(data)
        const d=await hotel.save()
        // console.log(d);
        res.status(200).json("Hotel Addedd Successfully")
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/:dest",async (req,res)=>{
    const hotelDest=req.params.dest
    // console.log(hotelDest);
    try {
        const d=await Hotel.find({city:hotelDest})
        // const ans=d.filter((item)=>(
        //     item.city===hotelDest
        //     ))
        // console.log(d);
        res.status(200).json(d)
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router