import { Nprisma } from "../../prisma/prisma"

export default class genre {
  static async getAll () {
    return await Nprisma.genre.findMany()
  }

  static async getByID ({id}:{id: number}) {
    return await Nprisma.genre.findUnique({
      where:{
        id: id
      }
    })
  }
}