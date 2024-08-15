import { RatingModel } from "../models/rating";
export class RatingController {
  static async getAll(_req, res) {
    const getall = RatingModel.getAll();
    if (!getall) {
      return res.status(404).json({ message: "Is Empty" });
    } else {
      res.status(200).json(getall);
    }
  }
  static async getByID(req, res) {
    const { id } = req.params;
    const numId = Number(id);

    const getbyId = await RatingModel.getByID({ id: numId });

    if (!getbyId)
      return res.staus(400).json({ message: "Rating id not found" });

    return res.status(201).json(getbyId);
  }
}
