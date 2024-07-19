import express from "express"
import { SignIn, login } from "../Controllers/authController.mjs"

const route = express.Router()

route.post("/login", login)
route.post("/signin", SignIn)

export default route