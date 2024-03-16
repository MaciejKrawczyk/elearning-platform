import asyncHandler from 'express-async-handler'
import { createUser, getUserByLogin } from '../services/db/user/User.queries'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const registerUser = asyncHandler(async (req, res) => {

    const {login: login, password: password, role: role} = req.body 

    const newPassword = await bcrypt.hash(password, 10)

    const userDataToSave = { login: login, password: newPassword, role: role }

    const newUser = await createUser(userDataToSave)

    res.status(201).send({
        message: "user created!",
        result: newUser,
        success: true
    })

})

export const logout = asyncHandler(async (req, res) => {

})

export const loginUser = asyncHandler(async (req, res) => {

    const {login: login, password: password} = req.body

    const user = await getUserByLogin(login)

    const isPasswordMatching = await bcrypt.compare(password, user.password)

    if (isPasswordMatching) {
        const jwtToken = jwt.sign(
            {
                login: user.login,
                userId: user.id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "10m"
            }
        )

        res.status(200).send({
            accessToken: jwtToken,
            userId: user.id
        })
    }

})