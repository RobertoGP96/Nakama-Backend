import { Nprisma } from "../../prisma/prisma";

export class QueryModel {
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
  static async create({ uId, input }: { uId: string; input: Query }) {
    return await Nprisma.query.create({ 
      data: {
        description: input.description,
        userId: uId,
        elements: input.elements,
        state: input.state
      },
    });
  }

  static async delete({ id }) {
    return await Nprisma.query.delete({
      where:{
        id: id
      }
    });
  }
  
  static async update({ id, input }: {id: string, input: editQuery}) {
    return await Nprisma.query.update({where:{
      id:id
    },data:{
      ...input
    }});
  }
}
