import { ExtermalIdsModel } from "../models/externalids";
export class CreditsController {
  static async getAll(_req, res) {
    const getall = ExtermalIdsModel.getAll();
    if (!getall) {
      return res.status(404).json({ message: "Is Empty" });
    } else {
      res.status(200).json(getall);
    }
  }
  static async getByID(req, res) {
    const { id } = req.params;
    const numId = Number(id);

    const getbyId = await ExtermalIdsModel.getByID({ id: numId });

    if (!getbyId)
      return res.staus(400).json({ message: "External Ids not found" });

    return res.status(201).json(getbyId);
  }
}
