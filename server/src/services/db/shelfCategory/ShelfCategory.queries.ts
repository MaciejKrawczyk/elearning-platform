import { ShelfCategory } from '@prisma/client'
import db from '../db'

type GetShelfCategoryDTO = ShelfCategory
type CreateShelfCategoryDTO = Omit<ShelfCategory, 'id'>
type UpdateShelfCategoryDTO = ShelfCategory

export async function getShelfCateories(): Promise<GetShelfCategoryDTO[]> {
    const object = await db.shelfCategory.findMany()
    return object
}

export async function getShelfCategoryById(id: number): Promise<GetShelfCategoryDTO> {
    const object = await db.shelfCategory.findFirst({
        where: {
            id: id
        }
    })

    if (object === null) {
        throw new Error("ShelfCategory with provided id doesn't exist")
    }

    return object
}

export async function deleteShelfCategoryById(id: number): Promise<GetShelfCategoryDTO> {
    const object = await db.shelfCategory.delete({
        where: {
            id: id
        }
    })
    return object
}

export async function createShelfCategory(object: CreateShelfCategoryDTO): Promise<GetShelfCategoryDTO> {
    const newObject = db.shelfCategory.create({
        data: {
            name: object.name,
            description: object.description,
            color: object.color
        }
    })
    return newObject
}

export async function editShelfCategoryById(object: UpdateShelfCategoryDTO): Promise<GetShelfCategoryDTO> {
    const editedObject = db.shelfCategory.update({
        where: { id: object.id },
        data: { 
            name: object.name,
            description: object.description,
            color: object.color
        }
    })
    return editedObject
}