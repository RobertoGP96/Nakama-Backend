import { Nprisma } from "../../prisma/prisma"

export class RatingModel {
  static async getAll () {
    return await Nprisma.ratings.findMany()
  }

  static async getByID ({ id }:{ id: number}) {
    return await Nprisma.ratings.findUnique({
      where:{
        id: id
      }
    })
  }
}
