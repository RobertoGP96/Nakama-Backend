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
  static async getByName({ name }) {
    return await Nprisma.api_Key.findUnique({
      where: {
        name: name,
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
  static async update({ id, input }: { id: string; input: updateApiKey }) {
    return await Nprisma.api_Key.update({
      where: {
        id: id,
      },
      data: {
        name: input.name,
        status: input.status,
      },
    });
  }

  static async generate({ id, token }: { id: string, token:string }):Promise<string> {
    return await Nprisma.api_Key.update({
      where:{
        id: id
      },
      data:{
        token: token
      }
    }).then((e)=>  e.token)
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
