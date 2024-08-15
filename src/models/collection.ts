import { Nprisma } from "../../prisma/prisma";

export class CollectionModel {
  static async getAll() {
    const getAll = await Nprisma.collection.findMany();
    return getAll;
  }
  static async getByID({ cid }) {
    return await Nprisma.collection.findUnique({
      where: {
        id: cid,
      },
    });
  }

  static async delete({ cid }) {
    return await Nprisma.collection.findUnique({
      where: {
        id: cid,
      },
    });
  }

  static async create({ input }: { input: createCollection }) {
    return await Nprisma.collection.create({
      data: {
        ...input,
      },
    });
  }
  static async update({
    cid,
    input,
  }: {
    cid: string;
    input: createCollection;
  }) {
    return await Nprisma.collection.update({
      where: {
        id: cid,
      },
      data: {
        ...input,
      },
    });
  }
}
