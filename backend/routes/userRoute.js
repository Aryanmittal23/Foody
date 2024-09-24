import express from "express"
import {loginUsers,registerUser } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUsers)

export default userRouter  