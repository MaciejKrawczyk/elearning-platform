import { Shelf } from '@prisma/client'
import db from '../db'

type GetShelfDTO = Shelf
type CreateShelfDTO = Omit<Shelf, 'id'>
type UpdateShelfDTO = Shelf

export async function getShelfCateories(): Promise<GetShelfDTO[]> {
    const object = await db.shelf.findMany()
    return object
}

export async function getShelfCategoryById(id: number): Promise<GetShelfDTO> {
    const object = await db.shelf.findFirst({
        where: {
            id: id
        }
    })

    if (object === null) {
        throw new Error("Shelf with provided id doesn't exist")
    }

    return object
}

export async function deleteShelfById(id: number): Promise<GetShelfDTO> {
    const object = await db.shelf.delete({
        where: {
            id: id
        }
    })
    return object
}

export async function createShelf(object: CreateShelfDTO): Promise<GetShelfDTO> {
    const newObject = db.shelf.create({
        data: {
            name: object.name,
            size: object.size,
            shelfCategoryId: object.shelfCategoryId
        }
    })
    return newObject
}

export async function editShelfById(object: UpdateShelfDTO): Promise<GetShelfDTO> {
    const editedObject = db.shelf.update({
        where: { id: object.id },
        data: { 
            name: object.name,
            size: object.size,
            shelfCategoryId: object.shelfCategoryId
        }
    })
    return editedObject
}