import { MiListModel } from "../models/milist";
import { Nprisma } from "../../prisma/prisma";
export class MiListController {
  static async getAll(_req, res) {
    const getall = await MiListModel.getAll();
    if (!getall) {
      return res.status(404).json({ message: "Is Empty" });
    } else {
      res.status(200).json(getall);
    }
  }
  static async getByID(req, res) {
    const { id } = req.params;
    const getbyId = await MiListModel.getByID({ id });

    if (!getbyId) return res.status(400).json({ message: "List id not found" });

    return res.status(200).json(getbyId);
  }
  static async delete(req, res) {
    const { id } = req.params;
    const checkId = MiListModel.getByID({ id });
    if (!checkId) return res.status(404).json({ message: "List Id not found" });
    const deleted = await MiListModel.delete({ id });
    if (!deleted) return res.status(404).json({ message: "List not found" });
    return res.status(201).json({ message: "List deleted" });
  }
  static async create(req, res) {
    const { id: uId } = req.params;
    const input = req.body;

    const checkId = Nprisma.user.findUnique({
      where: {
        id: uId,
      },
    });

    if (!checkId) return res.status(400).json({ message: "User Id not found" });

    const createdL = await MiListModel.create({ uId, input });

    if (!createdL) return res.status(400).json({ message: "List not created" });

    return res.status(201).json({ message: "List created" });
  }
  static async update(req, res) {
    const { id } = req.params;
    const input: MiList = req.body;
    const inputV = (req.body);

    if(inputV.error){
      res.status(400).json({ message: JSON.parse(inputV.error.message) });
    }
    //Check User Id
    const checkU = Nprisma.user.findUnique({
      where:{
        id: input.userId
      }
    })

    if(!checkU){
      return res.status(404).json({ message: "User id not found" });
    }

    const updatedL = await MiListModel.update({ id, input });

    if (!updatedL) return res.status(404).json({ message: "List not created" });

    return res.status(201).json({ message: "List updated" });
  }
}
