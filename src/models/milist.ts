import { Nprisma } from "../../prisma/prisma"

export class MiList {
  static async getAll () {
    return await Nprisma.miList.findMany()
  }

  static async getByID (id) {
    return await Nprisma.miList.findUnique(id)
  }
  static async create ({ input }) {
    return await Nprisma.miList.create(input)
  }

  static async delete (id) {
    return await Nprisma.miList.delete(id)
  }
  static async update ({ input }) {
    return await Nprisma.miList.update(input)
  }
}
