import { Nprisma } from "../../prisma/prisma";
export class Credits {
  static async getAll () {
    return await Nprisma.credits.findMany()
  }

  static async getByID ({id}:{id: number}) {
    return await Nprisma.credits.findUnique({
      where: {
        id: id
      }
    })
  }
  static async create ({ input }) {
    return await Nprisma.credits.create(input)
  }

  static async delete ({id}:{id : number}) {
    return await Nprisma.credits.delete({
      where: {
        id: id
      }
    })
  }
  static async update ({ input }) {
    return await Nprisma.credits.update(input)
  }
}
