import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export function authenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace("Bearer ", "")
    if (!token) {
        res.status(401).json({
            message: "Auth failed"
        })
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // @ts-ignore
    req.userData = decoded;
    next()
}

export function authorize(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace("Bearer ", "")
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decoded)
    next()
}