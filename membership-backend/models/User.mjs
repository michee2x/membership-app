import mongoose from "mongoose";

const Userschema = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    firstname:{
        type:String,
        default:""
    },
    lastname:{
        type:String,
        default:""
    },
    profilepic:{
        type:String,
        default:""
    },
    bio:{
        type:String,
        default:""
    }
})

const Member = mongoose.model("Member", Userschema)
export default Member