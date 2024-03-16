import { Company } from '@prisma/client'
import db from '../db'

type GetCompanyDTO = Company
type CreateCompanyDTO = Omit<Company, 'id'>
type UpdateCompanyDTO = Company

export async function getCompanies(): Promise<GetCompanyDTO[]> {
    const object = await db.company.findMany()
    return object
}

export async function getCompanyById(id: number): Promise<GetCompanyDTO> {
    const object = await db.company.findFirst({
        where: {
            id: id
        }
    })

    if (object === null) {
        throw new Error("Company with provided id doesn't exist")
    }

    return object
}

export async function deleteCompanyById(id: number): Promise<GetCompanyDTO> {    
    const object = await db.company.delete({
        where: {
            id: id
        }
    })
    return object
}

export async function createCompany(object: CreateCompanyDTO): Promise<GetCompanyDTO> {
    const newObject = db.company.create({
        data: {
            name: object.name,
            description: object.description,
        }
    })
    return newObject
}

export async function editCompanyById(object: UpdateCompanyDTO): Promise<GetCompanyDTO> {
    const editedObject = db.company.update({
        where: { id: object.id },
        data: { 
            name: object.name,
            description: object.description
        }
    })
    return editedObject
}