import { Nprisma } from "../../prisma/prisma";

export class PreSaveModel {
  static async getAll() {
    return await Nprisma.preSave.findMany();
  }

  static async getByID({ id }: { id: string }) {
    return await Nprisma.preSave.findUnique({
      where: {
        id: id,
      },
    });
  }
  static async create({ input }: { input: createPreSave }) {
    return await Nprisma.preSave.create({
      data: {
        pre_elements: input.pre_elements,
        save_elements: input.save_elements,
        resource_id: input.resource_id,
      },
    });
  }

  static async delete({ id }) {
    return await Nprisma.preSave.delete({
      where: {
        id: id,
      },
    });
  }

  static async update({ id, input }: { id: string; input: editPreSave }) {
    return await Nprisma.preSave.update({
      where: {
        id: id,
      },
      data: {
        pre_elements: input.pre_elements,
      },
    });
  }
}
