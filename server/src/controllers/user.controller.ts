import UserService from "../services/services/user.service";
import { Response, Request } from "express";

export class UserController {
    userService: UserService
    constructor() {
        this.userService = new UserService()
    }

    async create(req: Request, res: Response) {
        
        const user = req.body

        // validate if correct body

        const result = await this.userService.createUser(user)
        res.status(201).send(result)
    }

    async getOne(req: Request, res: Response) {
        const id = parseInt(req.params.id)

        const result = await this.userService.getUserById(id)
        
        res.status(200).send(result)
    }

    async getAll(req: Request, res: Response) {
        const result = await this.userService.getUsers()
        
        res.status(200).send(result)
    }

}
