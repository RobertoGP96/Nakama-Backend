import { Nprisma } from "../../prisma/prisma"

export class ExtermalIdsModel {
  static async getAll () {
    return await Nprisma.externalids.findMany()
  }

  static async getByID ({id}:{id: number}) {
    return await Nprisma.externalids.findUnique({
      where:{
        id: id
      }
    })
  }
}