import { Nprisma } from "../../prisma/prisma"

export class Rating {
  static async getAll () {
    return await Nprisma.ratings.findMany()
  }

  static async getByID (id) {
    return await Nprisma.ratings.findUnique(id)
  }
  static async create ({ input }) {
    return await Nprisma.ratings.create(input)
  }

  static async delete (id) {
    return await Nprisma.ratings.delete(id)
  }
  static async update ({ input }) {
    return await Nprisma.ratings.update(input)
  }
}
