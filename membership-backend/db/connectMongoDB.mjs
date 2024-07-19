import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try{

        await mongoose.connect("mongodb://localhost:27017")
        console.log("server is connected to database")

    }catch (error) {
        console.log("there was an error connectting to mongodb", error)
    }
}