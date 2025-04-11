import Member from "../models/User.mjs"
import { sendMail } from "../Util/SendMail.mjs"
import { SignInTemplate, LogInTemplate } from "../Templates/templates.mjs"
import bcrypt from "bcryptjs"
import { generateTokenAndSetCookie } from "../Util/generateAndSetCookie.mjs"

export const login = async (req, res) => {
    try{

        const {email, password} = req.body
        const foundUser = await Member.findOne({email:email})
        if(!foundUser){
            return res.status(401).json({error:"that user is not found"})
        }
        const equal = await bcrypt.compare(password, foundUser.password || "")
        if(!equal){
            return res.status(401).json({error:"password is not correct"})
        }
        generateTokenAndSetCookie(foundUser._id, res)
        await sendMail(LogInTemplate, email, "Login to Slaughter to prevail", res, foundUser)
        /* res.status(200).json({User:foundUser}) */
    }catch (error) {
        console.log("there was an error in login controller", error)
    }
}
export const SignIn = async (req, res) => {
    try{
        const {email, password} = req.body
        const exists = await Member.findOne({email:email})
        if(exists) {
            return res.status(401).json({error:"user already exists"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new Member({
            email, password:hashedPassword
        })
        if(newUser){
            newUser.save()
        }
        generateTokenAndSetCookie(newUser._id, res)
        await sendMail(SignInTemplate, email, "Sign up to Slaughter to previal", res, newUser)
        /* res.status(200).json({User:newUser}) */

    }catch (error) {
        console.log("there was an error in signin controller", error)
    }
}




export const Details = async (req, res) => {
    try{

        const details = req.body
        
        await sendMail(LogInTemplate, email, "Membership Signup", res, {email:michaelisraelmike@gmail.com})
     
    }catch (error) {
        console.log("there was an error in login controller", error)
    }
}