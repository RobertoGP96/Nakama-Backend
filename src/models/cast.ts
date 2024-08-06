import { Nprisma } from "../../prisma/prisma";

export default class Cast {
  static async getAll() {
    const getAll = await Nprisma.cast.findMany();
    return getAll;
  }
  static async getByID({ id }) {
    return await Nprisma.cast.findUnique(id);
  }
  static async create({ input }) {
    return await Nprisma.cast.create(input);
  }
  static async delete(id) {
    return await Nprisma.cast.delete(id);
  }
  static async update({ input }) {
    return await Nprisma.cast.update(input);
  }
}
