import mongoose from "mongoose";

const membershipSchema = mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    cat:{
        type:String,
        required:true
    }
},{timeStamps:true})

const Membership = mongoose.model("Membership", membershipSchema)
export default Membership