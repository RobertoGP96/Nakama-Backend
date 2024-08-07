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
}
