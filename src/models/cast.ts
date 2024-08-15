import { Nprisma } from '../../prisma/prisma'

export class CastModel {
  static async getAll() {
    const getAll = await Nprisma.cast.findMany();
    return getAll
  }
  static async getByID ({ id }) {
    return await Nprisma.cast.findUnique({
      where: {
        id: id
      }
    })
  }
}
