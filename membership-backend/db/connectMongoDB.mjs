import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try{

        await mongoose.connect(`mongodb+srv://michaelisraelmike:${process.env.Mongopass}@cluster0.braqs4o.mongodb.net/chat-X?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("server is connected to database")

    }catch (error) {
        console.log("there was an error connectting to mongodb", error)
    }
}
