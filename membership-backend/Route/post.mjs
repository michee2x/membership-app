import express from "express"
import { PostFunc, fetchParPost, fetchPost } from "../Controllers/post.mjs"
import multer from "multer"
import { ProtectedRoute } from "../MiddleWare/ProtectedRoute.mjs"
const uploadMiddleware = multer({dest:"uploads/"})
const route = express.Router()

route.post("/post",ProtectedRoute,uploadMiddleware.single("file"), PostFunc)
route.get("/getfeedposts",ProtectedRoute, fetchPost)
route.get("/getparpost/:id",ProtectedRoute, fetchParPost)

export default route