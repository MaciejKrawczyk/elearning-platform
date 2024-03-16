import db from "../db";

export async function isFirstBootService() {

    const users = await db.user.findMany()

    if (users.length === 0) {
        return false
    }

    return true

}