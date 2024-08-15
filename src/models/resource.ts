import { Nprisma } from "../../prisma/prisma";
import { editResourse, resourceItem } from "../types/resources";

export class ResourceModel {
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
        e_founds_count: input.e_found_count,
        e_pending_count: input.e_pending_count,
        e_founds: input.e_founds,
    }});
  }

  static async delete({ id }) {
    return await Nprisma.resource.delete({
      where: {
        id: id,
      },
    });
  }
  static async update({ id, input }: { id: number; input: editResourse }) {
    return await Nprisma.resource.update({
      where: {
        id: id,
      },
      data: {
        ...input
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
