import { Nprisma } from "../../prisma/prisma"

export class NakamaElementModel {
  static async getAll () {
    return await Nprisma.element.findMany()
  }

  static async getByID (id) {
    return await Nprisma.element.findUnique(id)
  }
  static async create ({ input }) {
    return await Nprisma.element.create(input)
  }

  static async delete (id) {
    return await Nprisma.element.delete(id)
  }
  static async update ({ input }) {
    return await Nprisma.element.update(input)
  }
}
