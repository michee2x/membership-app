import jwt from "jsonwebtoken"
import User from "../models/User.mjs"
export const ProtectedRoute = async (req, res, next) => {
    try{
        console.log(req.cookies.blogroidCookie, req.cookies)
        const {blogroidCookie} = req.cookies
        
    const cookie = blogroidCookie
    
    if(!cookie) {
        console.log("no token found")
    return res.status(401).json({error:`there is no cookies`})}

    const decoded =  jwt.verify(cookie, "thi is jwt secret")

    if(!decoded) return res.status(401).json({error:"invalid token in headers"})

    const foundUser = await User.findById(decoded.payload)
    console.log('this is the found User', foundUser)

    if(!foundUser) return res.status(404).json({error:"user not found err..."})

    req.user = foundUser

    next()

    }catch(error){
        console.log('there is an error in protedtedroute', error)
    }
}