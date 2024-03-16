import express from 'express'
import { registerUser, loginUser } from '../controllers/auth.controller'

const authRouter = express.Router()

const registerValidation = async (req, res, next) => {
    next()
}

const loginValidation = async (req, res, next) => {
    next()
}

authRouter.post("/register",registerValidation , registerUser)

authRouter.post("/login", loginValidation, loginUser)

export default authRouter