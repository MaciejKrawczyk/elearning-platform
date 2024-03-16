import { Item } from '@prisma/client'
import db from '../db'

type GetItemDTO = Item
type CreateItemDTO = Omit<Item, 'id'>
type UpdateItemDTO = Item

export async function getItem(): Promise<GetItemDTO[]> {
    const object = await db.item.findMany()
    return object
}

export async function getItemById(id: number): Promise<GetItemDTO> {
    const object = await db.item.findFirst({
        where: {
            id: id
        }
    })

    if (object === null) {
        throw new Error("Item with provided id doesn't exist")
    }

    return object
}

export async function deleteItemById(id: number): Promise<GetItemDTO> {    
    const object = await db.item.delete({
        where: {
            id: id
        }
    })
    return object
}

export async function createItem(object: CreateItemDTO): Promise<GetItemDTO> {
    const newObject = db.item.create({
        data: {
            name: object.name,
            description: object.description,
            placeId: object.placeId,
            shelfId: object.shelfId, // optional
            itemTypeId: object.itemTypeId,
            companyId: object.companyId,
            shelfSize: object.shelfSize,
            status: {
                create: {
                    name: 'created',
                    description: 'created item'
                }
            }

        }
    })
    return newObject
}

export async function editItemById(object: UpdateItemDTO): Promise<GetItemDTO> {
    const editedObject = db.item.update({
        where: { id: object.id },
        data: { 
            name: object.name,
            description: object.description
        }
    })
    return editedObject
}