import { GenreModel } from "../models/genre";
export class GenreController {
  static async getAll(_req, res) {
    const getall = GenreModel.getAll();
    if (!getall) {
      return res.status(404).json({ message: "Is Empty" });
    } else {
      res.status(200).json(getall);
    }
  }
  static async getByID(req, res) {
    const { id } = req.params;
    const numId = Number(id);

    const getbyId = await GenreModel.getByID({ id: numId });

    if (!getbyId) return res.staus(400).json({ message: "Genre id not found" });

    return res.status(200).json(getbyId);
  }
}
