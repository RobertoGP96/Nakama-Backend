import { Nprisma } from "../../prisma/prisma";

export default class Cast {
  static async getAll() {
    const getAll = await Nprisma.cast.findMany();
    return getAll;
  }
  static async getByID({ id }) {
    return await Nprisma.cast.findUnique({
      where:{
        id: id
      }
    });
  }
}
