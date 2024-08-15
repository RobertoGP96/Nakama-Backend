import { MetaDataModel } from "../models/metadata";
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

    return res.status(201).json(getbyId);
  }
}
