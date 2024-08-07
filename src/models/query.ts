import { Nprisma } from "../../prisma/prisma";

export class Query {
  static async getAll() {
    return await Nprisma.query.findMany();
  }

  static async getByID({ id }: { id: string }) {
    return await Nprisma.query.findUnique({
      where: {
        id: id
      },
    });
  }
  static async create({ uId, input }: { uId: string; input: query }) {
    return await Nprisma.query.create({ 
      data: {
        description: input.description,
        userId: uId,
        elements: input.elements,
      },
    });
  }

  static async delete({ id }) {
    return await Nprisma.query.delete(id);
  }
  static async update({ input }) {
    return await Nprisma.query.update(input);
  }
}
