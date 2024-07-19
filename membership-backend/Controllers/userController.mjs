import Member from "../models/User.mjs"
import cloudinary from "cloudinary"
import fs from "fs"
import bcrypt from "bcryptjs"

export const editprofile = async (req, res) => {
    try{
        const id = req.user._id
        const {email, password, confirmpassword, firstname, lastname, bio} = req.body
        let img = ""
        let hashedPassword = ""
        const {originalname, path} = req.file
        const parts = originalname.split(".")
        const ext = parts[parts.length - 1]
        const newPath = path+"."+ext
        fs.renameSync(path, newPath)
        console.log("this is the img", req.file || "")
        const user = await Member.findById(id)

        if(password === confirmpassword){
            const thesame = await bcrypt.compare(password, user.password || "")

            if(thesame){
                const salt = await bcrypt.genSalt(10)
                const hashedpassword = await bcrypt.hash(password, salt)
                hashedPassword = hashedpassword
            }
        }else{
            res.status(401).json({error:"passwords are thesame"})
        }

        if(user){
             if(user.profilepic){
                const userId = user.profilepic.split("/").pop().split(".")[0]
                await cloudinary.uploader.destroy(userId)
            }
            const res = await cloudinary.uploader.upload(newPath)
            const imgId = res.secure_url
            img = imgId
        }
        const newUserInfo = {
            _id:id,
            email:email || user.email,
            password:hashedPassword || user.password,
            firstname:firstname || user.firstname,
            lastname:lastname || user.lastname,
            profilepic:img === undefined ? "" : img,
            bio:bio || user.bio
        }

        await Member.findByIdAndUpdate(id, newUserInfo)
        res.status(200).json({mssage:"edit successfull"})

    }catch(error) {
        console.log("there is an error in editprofile controller", error)
    }
}