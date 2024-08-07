import { Nprisma } from "../../prisma/prisma";

export class MiList {
  static async getAll() {
    return await Nprisma.miList.findMany();
  }

  static async getByID({ id }: { id: string }) {
    return await Nprisma.miList.findUnique({
      where: {
        id: id,
      },
    });
  }
  static async create({ uId, input }: { uId: string; input: miList }) {
    return await Nprisma.miList.create({
      data: {
        userId: uId,
        elements: input.elements,
      },
    });
  }

  static async delete({ id }: { id: string }) {
    return await Nprisma.miList.delete({
      where: {
        id: id,
      },
    });
  }
  static async update({ id, input }: { id: string; input: miList }) {
    return await Nprisma.miList.update({
      where: {
        id: id,
      },
      data: {
        elements: input.elements,
      },
    });
  }
}
