import { Nprisma } from "../../prisma/prisma"

export class Query {
  static async getAll () {
    return await Nprisma.query.findMany()
  }

  static async getByID (id) {
    return await Nprisma.query.findUnique(id)
  }
  static async create ({ input }) {
    return await Nprisma.query.create(input)
  }

  static async delete (id) {
    return await Nprisma.query.delete(id)
  }
  static async update ({ input }) {
    return await Nprisma.query.update(input)
  }
}
