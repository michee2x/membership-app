import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import authRoute from "./Route/authRoute.mjs"
import { connectMongoDB } from "./db/connectMongoDB.mjs"
import subscribeRoute from "./Route/Membership.mjs"
import editProfileRoute from "./Route/userRoute.mjs"
import {v2 as cloudinary} from 'cloudinary';

dotenv.config()

cloudinary.config({ 
  cloud_name: process.env.cloud_name, 
  api_key: process.env.api_key, 
  api_secret: process.env.api_secret 
});

const app = express()

dotenv.config()

//Create Middlewares for the server

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials:true, origin:["https://slaughter-to-prevail.onrender.com", "https://membership-app-cyan.vercel.app"], methods:["POST", "GET"]}))

//Create Routes for the server
app.use("/auth", authRoute)
app.use("/", subscribeRoute)
app.use("/", editProfileRoute)


app.listen(9000, () => {
    console.log("app running on port 9000")
    connectMongoDB()
})