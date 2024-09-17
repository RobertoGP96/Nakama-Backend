import { Nprisma } from "../../prisma/prisma"

export class MetaDataModel {
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
  static async create({input}:{input: createMetadata}){
    return await Nprisma.metadata.create({
      data: {
        ...input
      }
    })
  }
}
