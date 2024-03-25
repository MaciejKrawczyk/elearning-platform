import UserDAO from "../dao/UserDAO";
import { User } from "@prisma/client";

export default class UserService {
    userDAO: UserDAO
    constructor() {   
        this.userDAO = new UserDAO()
    }

    async createUser(user: Omit<User, 'id'>) {
        const result = await this.userDAO.create(user)
        return result
    }

    async getUsers() {
        const result = await this.userDAO.getAll()
        return result
    }

    async getUserById(id: number) {
        const result = await this.userDAO.getOne(id)
        return result
    } 

    
}