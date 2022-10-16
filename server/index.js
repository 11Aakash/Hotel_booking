import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import cors from 'cors'
const app=express()
dotenv.config()

const connect=()=>{
    try {
        mongoose.connect(process.env.mongoDB,()=>{
            console.log("mongo db connected");
        })
        
    } catch (error) {
        throw error
    }
}

mongoose.connection.on('disconnected',()=>{
    console.log("MongoDB Disconnected");
})
mongoose.connection.on('connected',()=>{
    console.log("MongoDB Cconnected");
})

app.use(cors())
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use("/api/rooms",roomsRoute)

app.listen(8000,()=>{
    connect()
    console.log("app listening on port 8000");
})