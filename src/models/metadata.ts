import { Nprisma } from "../../prisma/prisma"

export class MetaData {
  static async getAll () {
    return await Nprisma.metadata.findMany()
  }

  static async getByID (id) {
    return await Nprisma.metadata.findUnique(id)
  }
  static async create ({ input }) {
    return await Nprisma.metadata.create(input)
  }

  static async delete (id) {
    return await Nprisma.metadata.delete(id)
  }
  static async update ({ input }) {
    return await Nprisma.metadata.update(input)
  }
}
