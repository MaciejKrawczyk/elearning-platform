import { isFirstBootService } from "../services/db/utils/utils"
import { Request, Response, NextFunction } from "express"

export async function isFirstBoot(req: Request, res: Response, next: NextFunction) {

    const isFirstBoot = await isFirstBootService()

    if (!isFirstBoot) {
        res.send()
    }

    next()
}