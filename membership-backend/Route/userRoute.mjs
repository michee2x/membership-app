import express from "express"
import multer from "multer"
const route = express.Router()
const uploadMiddleware = multer({dest:"uploads/"})
import { editprofile } from "../Controllers/userController.mjs"
import {ProtectedRoute} from "../MiddleWare/ProtectedRoute.mjs"

route.post("/editprofile", uploadMiddleware.single("img"), ProtectedRoute, editprofile)

export default route