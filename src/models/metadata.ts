import { Nprisma } from "../../prisma/prisma"

export class MetaData {
  static async getAll () {
    return await Nprisma.metadata.findMany()
  }

  static async getByID ({id}:{id : number}) {
    return await Nprisma.metadata.findUnique({
      where:{
        id: id
      }
    })
  }
}
