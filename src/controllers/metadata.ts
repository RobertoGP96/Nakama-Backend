import metadata from "../models/metadata";
export class Metadata {
  static async getAll(_req, res) {
    const all = metadata.getAll();
    return res.status(201).json(all);
  }
  static async getByID(req, res) {
    const { id } = req.params;
    const getbyId = await metadata.getByID({ id });
    return res.status(201).json(getbyId);
  }
}
