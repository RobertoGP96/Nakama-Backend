import { Nprisma } from "../../prisma/prisma";

export class ApiKeyModel {
  static async getAll() {
    const getAll = await Nprisma.api_Key.findMany();
    if (!getAll) throw new Error();
    else {
      return getAll;
    }
  }
  static async getByID({ id }) {
    return await Nprisma.api_Key.findUnique({
      where: {
        id: id,
      },
    });
  }

  static async create({ input }: { input: createApiKey }) {
    return await Nprisma.api_Key.create({
      data: {
        name: input.name,
        token: input.token,
        status: input.status,
        
      },
    });
  }
  static async update({ id, input }: { id: string; input: createApiKey }) {
    return await Nprisma.api_Key.update({
      where: {
        id: id,
      },
      data: {
        name: input.name,
        token: input.token,
        status: input.status,
      },
    });
  }

  static async checkID({ id }: { id: string }) {
    const results = await Nprisma.api_Key.findUnique({
      where: {
        id: id
      }
    })

    return results? true : false
  }

  static async checkUniqueFields({ id, input }: { id: string, input: createApiKey }) {
    const results = await Nprisma.api_Key.findMany({
      where: {
        name: input.name,
        token: input.token 
      }
    })

    return await (results.length==0 || (results.length==1 && results[0].id==id))? true : false
  }
}
