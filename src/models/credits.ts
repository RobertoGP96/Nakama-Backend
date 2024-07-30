import { Nprisma } from "../../prisma/prisma";
export class Credits {
  static async getAll () {
    return await Nprisma.credits.findMany()
  }

  static async getByID (id) {
    return await Nprisma.credits.findUnique(id)
  }
  static async create ({ input }) {
    return await Nprisma.credits.create(input)
  }

  static async delete (id) {
    return await Nprisma.credits.delete(id)
  }
  static async update ({ input }) {
    return await Nprisma.credits.update(input)
  }
}
