import { User } from "@prisma/client";
import db from "../db/db";


export default class UserDAO {

    async create(obj: Omit<User, 'id'>) {

        const result = await db.user.create({
            data: obj
        })
        
        return result

    }

    async getAll() {
        const result = await db.user.findMany()
        return result
    }

    async getOne(id: number) {
        const result = await db.user.findFirst({
            where: {
                id: id
            }
        })
        return result
    }

    // async update(id: number, obj: Omit<User, 'id'>) {
    //     const result = await db.user.update({
    //         data: {
                
    //         },
    //         where: {
    //             id: id
    //         }
    //     })
    // }

    async delete(id: number) {
        const result = db.user.delete({
            where: {
                id: id
            }
        })
        return result
    }
}