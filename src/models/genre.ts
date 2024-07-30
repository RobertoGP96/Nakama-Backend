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

  static async delete (id) {
    return await Nprisma.genre.delete(id)
  }
  static async update ({ input }) {
    return await Nprisma.genre.update(input)
  }
}