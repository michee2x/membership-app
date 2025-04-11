import express from "express"
import { SignIn, login, Details } from "../Controllers/authController.mjs"

const route = express.Router()

route.post("/login", login)
route.post("/signin", SignIn)
route.post("/details", Details)

export default route