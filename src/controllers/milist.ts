import milist from "../models/milist";
import { Nprisma }  from '../../prisma/prisma'
export class MiList {
  static async getAll(_req, _res) {
    const getall = await milist.getAll();
    return _res.status(201).json(getall);
  }
  static async getByID(req, res) {
    const { id } = req.params;
    const getbyId = await milist.getByID({ id });

    if (!getbyId) return res.status(400).json({ message: "List id not found" });

    return res.status(201).json(getbyId);
  }
  static async delete(req, res) {
    const { id } = req.params;

    const checkId = milist.getByID({ id });

    if (!checkId) return res.status(400).json({ message: "List Id not found" });

    const deleted = await milist.delete({ id });

    if (!deleted) return res.status(400).json({ message: "List not found" });

    return res.status(201).json({ message: "List deleted" });
  }
  static async create(req, res) {
    const { id: uId } = req.params;
    const input = req.body;

    const checkId = Nprisma.user.findUnique({ where:{
      id: uId
    } });
    
    if (!checkId) return res.status(400).json({ message: "User Id not found" });

    const createdL = await milist.create({ uId, input });

    if (!createdL) return res.status(400).json({ message: "List not created" });

    return res.status(201).json({ message: "List created" });
  }
  static async update(req, res) {
    const { id } = req.params;
    const input = req.body;

    const updatedL = await milist.update({ id, input });

    if (!updatedL) return res.status(400).json({ message: "List not found" });

    return res.status(201).json({ message: "List updated" });
  }
}
