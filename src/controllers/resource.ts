import { number } from "zod";
import resource from "../models/resource";
import { validateResource } from "../schemas/resource";
export class Resource {
  static async getAll(_req, res) {
    const getall = await resource.getAll();
    return res.status(200).json(getall);
  }
  static async getByID(req, res) {
    const { id } = req.params;
    const numbId = parseInt(id, 10);
    const getbyId = await resource.getByID({ id: numbId });
    res.status(201).json(getbyId);
  }
  static async delete(req, res) {
    const { id } = req.params;
    const numbId = Number(id);
    const idCheck = await resource.getByID({ id: numbId });
    if (!idCheck) {
      return res.status(400).json({ message: "Id not foud" });
    } else {
      const deleted = await resource.delete({ id: numbId });
      return res.status(200).json(deleted);
    }
  }
  static async create(req, res) {
    const input = req.body;
    console.log(input);
    const createdL = await resource.create({ input });

    if (!createdL)
      return res.status(400).json({ message: "Resource not created" });

    return res.status(201).json({ message: "Resource created" });
  }

  static async update(req, res) {
    const { id } = req.params;
    const input = req.body;
    
    const inputV = validateResource(req.body);

    if(inputV.error)
      res.status(400).json( {message: JSON.parse(inputV.error.message)})
    
    try {
      const numbId = Number(id);
      const idCheck = await resource.getByID({ id: numbId });
      if (!idCheck) {
        return res.status(400).json({ message: "Id not foud" });
      }
    
      const uqcheck = await resource.uqcheck({ addres: input.addres });
      if (uqcheck) {
        const updatedL = await resource.update({ id: numbId, input: input.data });
        if (updatedL)
          return await res.status(201).json({ message: "Resource updated" });
      } else {
        return await res.status(400).json({ message: "Addres must be unique" });
      }
    } catch {
      res.status(500).json({ message: "Error interno del servidor." });
    }
  }
}
