import { ResourceModel } from "../models/resource";
import { validateResource } from "../schemas/resource";
export class ResourceController {
  static async getAll(_req, res) {
    const getall = await ResourceModel.getAll();

    if (!getall) {
      return res.status(404).json({ message: "Is Empty" });
    } else {
      res.status(200).json(getall);
    }
  }
  static async getByID(req, res) {
    const { id } = req.params;
    const numbId = Number(id);
    const getbyId = await ResourceModel.getByID({ id: numbId });
    //Id check
    if (!getbyId) {
      return res.status(400).json({ message: "Id not foud" });
    } else {
      res.status(200).json(getbyId);
    }
  }
  
  static async delete(req, res) {
    const { id } = req.params;
    const numbId = Number(id);
    //Check ID
    const idCheck = await ResourceModel.getByID({ id: numbId });
    if (!idCheck) {
      return res.status(400).json({ message: "Id not foud" });
    } else {
      try {
        var deleted = await ResourceModel.delete({ id: numbId });
        return res.status(200).json(deleted);
      } catch (error) {
        return res
          .status(400)
          .json({ message: "Resource not deleted", error: error });
      }
    }
  }
  static async create(req, res) {
    const input = req.body;

    const inputV = validateResource(req.body);
    if (inputV.error)
      res.status(400).json({ message: JSON.parse(inputV.error.message) });
    else if (inputV.success) {
      //Check unique
      const uqcheck = await ResourceModel.uqcheck({ addres: input.addres });
      if (uqcheck) {
        try {
          const createdL = await ResourceModel.create({ input });
          return res.status(201).json({ message: "Resource created" });
        } catch {
          return res.status(400).json({ message: "Resource not created" });
        }
      } else {
        //Unespected error
        return await res.status(409).json({ message: "Addres must be unique" });
      }
    }

  }

  static async update(req, res) {
    const { id } = req.params;
    const input = req.body;

    const inputV = validateResource(req.body);
    //Schema Validation
    if (inputV.error)
      res.status(400).json({ message: JSON.parse(inputV.error.message) });
    else if (inputV.success) {
      //Check id
      const numbId = Number(id);
      const idCheck = await ResourceModel.getByID({ id: numbId });
      if (!idCheck) {
        return res.status(404).json({ message: "Id not foud" });
      }
      //Check unique
      const uqcheck = await ResourceModel.uqcheck({ addres: input.addres });
      if (uqcheck) {
        //Unexpected error
        try {
          const updatedL = await ResourceModel.update({
            id: numbId,
            input: input.data,
          });
          if (updatedL)
            return await res.status(201).json({ message: "Resource updated" });
        } catch {
          return await res
            .status(500)
            .json({ message: "Resource not created " });
        }
      } else {
        return await res.status(409).json({ message: "Addres must be unique" });
      }
    }
  }
}
