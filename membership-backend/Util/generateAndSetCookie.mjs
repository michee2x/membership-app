import jwt from "jsonwebtoken"
export const  generateTokenAndSetCookie = (payload, res) => {
    try{
    const token = jwt.sign({payload}, "thi is jwt secret", {
        expiresIn:`15d`
    })
    res.cookie("blogroidCookie", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly:true,
        sameSite:"Strict",
        secure:false
    })

    } catch (error){
console.log("there was an error in signup controller: ", error)
    }
}