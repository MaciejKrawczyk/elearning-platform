import { Role, User } from '@prisma/client'
import db from '../db'

type GetUserDTO = User
type CreateUserDTO = Omit<User, 'id'>
type UpdateUserDTO = User

export async function getUsers(): Promise<GetUserDTO[]> {
    const users = await db.user.findMany()
    return users
}

export async function getUserById(id: number): Promise<GetUserDTO> {
    const user = await db.user.findFirst({
        where: {
            id: id
        }
    })
    if (user === null) {
        throw new Error("couldn't find user")
    }

    return user
}

export async function getUserByLogin(login: string): Promise<GetUserDTO> {
    const user = await db.user.findFirst({
        where: {
            login: login
        }
    })
    if (user === null) {
        throw new Error("couldn't find user")
    }

    return user
}

export async function deleteUserById(id: number): Promise<GetUserDTO> {
    const user = await db.user.delete({
        where: {
            id: id
        }
    })

    return user
}

export async function createUser(user: CreateUserDTO): Promise<GetUserDTO> {
    const newUser = db.user.create({
        data: {
            login: user.login,
            password: user.password,
            role: user.role 
        }
    })
    return newUser
}

//TODO update user