import { Nprisma } from "../../prisma/prisma";
import { resourceItem } from "../types/resources";

export class Resource {
  static async getAll() {
    return await Nprisma.credits.findMany();
  }

  static async getByID({ id }) {
    return await Nprisma.credits.findUnique({
      where: {
        id: id,
      },
    });
  }
  static async create({ input }:{input: resourceItem}) {
    return await Nprisma.resource.create({
      data:{
        address: input.addres,
        type: input.type,
        e_founds_count: input.e_found,
        e_pending_count: input.e_pending,
        e_founds: input.e_ids,
    }});
  }

  static async delete({ id }) {
    return await Nprisma.credits.delete({
      where: {
        id: id,
      },
    });
  }
  static async update({ id, input }: { id: number; input: resourceItem }) {
    return await Nprisma.resource.update({
      where: {
        id: id,
      },
      data: {
        address: input.addres,
        e_founds_count: input.e_found,
        e_pending_count: input.e_pending,
        e_founds: input.e_ids,
        type: input.type
      },
    });
  }
}
