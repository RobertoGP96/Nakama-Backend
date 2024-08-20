import { CollectionModel } from "../models/collection";
import { validateCollection } from "../schemas/collection";

export class CollectionController {
  static async getAll(_req, res) {
    const getall = await CollectionModel.getAll();
    if (!getall) {
      return res.status(400).json({ message: "Is Empty" });
    } else {
      res.status(200).json(getall);
    }
  }
  static async getByID(_req, res) {
    const { id } = _req.params;

    const getbyId = await CollectionModel.getByID({ cid: id });

    if (!getbyId)
      return res.staus(400).json({ message: "Collection id not found" });

    return res.status(200).json(getbyId);
  }

  static async delete(req, res) {
    const { id } = req.params;
    //Check ID
    const idCheck = await CollectionModel.getByID({ cid: id });
    if (!idCheck) {
      return res.status(400).json({ message: "Id not foud" });
    } else {
      try {
        var deleted = await CollectionModel.delete({ cid: id });
        return res.status(200).json({ messsage: "Collection deleted" });
      } catch (error) {
        return res
          .status(400)
          .json({ message: "Collection not deleted", error: error });
      }
    }
  }

  static async create(req, res) {
    const { id } = req.params;
    const input: createCollection = req.body;
    const inputV = validateCollection(input);

    const checkId = CollectionModel.getByID({ cid: id });
    if (inputV.error) res.status(400).json(inputV.error.message);

    if (!checkId) return res.status(400).json({ message: "User Id not found" });
    try {
      const createdL = await CollectionModel.create({ input });
      if (!createdL)
        return res.status(400).json({ message: "List not created" });
      return res.status(201).json({ message: "List created" });
    } catch {
      return res.status(400).json({ message: "Something is wrong" });
    }
  }
  static async update(req , res) {
    const { id } = req.params;
    const input: createCollection = req.body;
    const inputV = validateCollection(input);

    if (inputV.error) {
      res.status(400).json({ message: JSON.parse(inputV.error.message) });
    }
    try {
      const updatedL = await CollectionModel.update({ cid: id, input });
      if (!updatedL)
        return res.status(404).json({ message: "List not created" });
      return res.status(201).json({ message: "List updated" });
    } catch {
      return res.status(400).json({ message: "Something is wrong" });
    }
  }
}
