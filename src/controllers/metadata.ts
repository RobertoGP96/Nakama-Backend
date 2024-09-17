import { MetaDataModel } from "../models/metadata";
import { validateMetadata } from "../schemas/metadata";
export class MetadataController {
  static async getAll(_req, res) {
    const getall = MetaDataModel.getAll();
    if (!getall) {
      return res.status(404).json({ message: "Is Empty" });
    } else {
      res.status(200).json(getall);
    }
  }
  static async getByID(req, res) {
    const { id } = req.params;
    const numId = Number(id);

    const getbyId = await MetaDataModel.getByID({ id: numId });

    if (!getbyId)
      return res.staus(400).json({ message: "Metadata id not found" });

    return res.status(200).json(getbyId);
  }

  static async create(req, res) {
    const input = req.body;

    const inputV = validateMetadata(req.body);
    if (inputV.error)
      res.status(400).json({ message: JSON.parse(inputV.error.message) });
    else if (inputV.success) {
      try {
        const createdL = await MetaDataModel.create({ input });
        return res.status(201).json({ message: "Metadata created" });
      } catch {
        return res.status(400).json({ message: "Metadata not created" });
      }
    }
  }
}
