import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const userRouter = Router()
const userController = new UserController()

userRouter.post('/user', userController.create)

userRouter.get('/user', userController.getAll)

userRouter.get('/user/:id', userController.getOne)


export default userRouter