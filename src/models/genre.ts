import { Nprisma } from "../../prisma/prisma"

export class genre {
  static async getAll () {
    return await Nprisma.genre.findMany()
  }

  static async getByID (id) {
    return await Nprisma.genre.findUnique(id)
  }
  static async create ({ input }) {
    return await Nprisma.genre.create(input)
  }

  static async delete (id: number) {
    return await Nprisma.genre.delete({
      where:{
        id: id
      }
    })
  }
  static async update ({ id, input }:{id: number, }) {
    return await Nprisma.genre.update({
      where: {
        id: id
      },
      data: {
        
      }
    })
  }
}