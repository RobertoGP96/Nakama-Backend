import { Nprisma } from "../../prisma/prisma";
import { resourceItem } from "../types/resources";

export default class Resource {
  static async getAll() {
    return await Nprisma.resource.findMany();
  }

  static async getByID({ id }) {
    return await Nprisma.resource.findUnique({
      where: {
        id: id,
      },
    });
  }
  static async create({ input }:{input: resourceItem}) {
    return await Nprisma.resource.create({
      data:{
        addres: input.addres,
        type: input.type,
        e_founds_count: input.e_found,
        e_pending_count: input.e_pending,
        e_founds: input.e_ids,
    }});
  }

  static async delete({ id }) {
    return await Nprisma.resource.delete({
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
        addres: input.addres,
        e_founds_count: input.e_found,
        e_pending_count: input.e_pending,
        e_founds: input.e_ids,
        type: input.type,

      },
    });
  }
  static async uqcheck({ addres }:{ addres: string}): Promise<boolean> {
    const findUniq= Nprisma.resource.findUnique({
      where:{
        addres: addres
      }
    })
    
    return await findUniq? (false): (true) 
  }
}
