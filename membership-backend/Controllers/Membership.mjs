import Membership from "../models/Membership.mjs";
import nodemailer from "nodemailer"

export const MembershipFunc = async(req, res) => {
    try{

        const {email} = req.body
        /* const AnyEmail = await subscriber.findOne({email})
        console.log("this is a subscribe RouteFunc ", AnyEmail)
        if(AnyEmail) return res.status(401).json({error:"User has Already Subscribed to NewsLetter"})


        const newSubscriber = new subscriber({
            email:email
        })
        await newSubscriber.save() */
        res.status(200).json({message:"Subscription Successfull..."})
        console.log("mail sent successfullly")

    }catch(error){
        console.log("there is an error in subscribe controller", error)
    }
}