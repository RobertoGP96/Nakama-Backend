import { Nprisma } from "../../prisma/prisma";

export class UserModel {
  static async getAll() {
    return await Nprisma.user.findMany();
  }

  static async getByID({ id }: { id : string}) {
    return await Nprisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
  static async create({ input }: { input: newUser }) {
    return await Nprisma.user.create({
      data: {
        username: input.username,
        lastname: input.lastname,
        nickname: input.nickname,
        email: input.email,
        password: input.password,
        role: input.role,
        phone: input.phone,
      },
    });
  }

  static async delete({ id }) {
    return await Nprisma.user.delete({
      where: {
        id: id,
      },
    });
  }
  static async update({ id, input }: { id: string; input: editUser }) {
    return await Nprisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...input
      },
    });
  }

  static async uniqueCheck({ input }: { input: uniqueUser }) {
    const results = Nprisma.user.findMany({
      where: {
        email: input.email,
        nickname: input.nickname,
        phone: input.phone,
      },
    });
    return await results? (false): (true) 
  }

  static async getByEmail({ email }: { email : string}) {
    return await Nprisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }
}
