import element from "../models/NakamaElement";
export class NakamaElementController {
  static async getAll(_req, res) {
    const getall = await element.getAll();
    return res.status(201).json(getall);
  }
  static async getByID(req, res) {
    const { id } = req.params;
    const getbyId = await element.getByID({ id });

    if (!getbyId) return res.status(400).json({ message: "Element not found" });

    return res.status(201).json(getbyId);
  }
  static async delete(req, res) {
    const { id } = req.params;
    const deleted = await element.delete({ id });

    if (!deleted) return res.status(400).json({ message: "Element not found" });

    return res.status(201).json({ message: "Element deleted" });
  }
  static async create(req, res) {
    const input = req.body;

    const createdL = await element.create({ input });

    if (!createdL)
      return res.status(400).json({ message: "Element not created" });

    return res.status(201).json({ message: "Element created" });
  }

  static async update(req, res) {
    const { id } = req.params;
    const input = req.body;

    const updatedL = await element.update({ id, input });

    if (!updatedL)
      return res.status(400).json({ message: "Element not found" });

    return res.status(201).json({ message: "Element updated" });
  }
}
