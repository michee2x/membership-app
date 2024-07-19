import express from "express"
import {MembershipFunc } from "../Controllers/Membership.mjs"
const route = express.Router()

route.post("/membership", MembershipFunc)

export default route