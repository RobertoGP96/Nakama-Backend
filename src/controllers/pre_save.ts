import { PreSaveModel } from "../models/pre_save";
import { ResourceModel } from "../models/resource";
import { validatePreSave } from "../schemas/pre_save";

export class PreSaveController {
  static async getAll(_req, res) {
    const getall = PreSaveModel.getAll();
    if (!getall) {
      return res.status(404).json({ message: "Is Empty" });
    } else {
      res.status(200).json(getall);
    }
  }
  static async getByID(req, res) {
    const { id } = req.params;

    const getbyId = await PreSaveModel.getByID({ id });

    if (!getbyId)
      return res.staus(400).json({ message: "Pre_Save id not found" });

    return res.status(200).json(getbyId);
  }
  
  static async create(req, res) {
    const input = req.body;

    const inputV = validatePreSave(req.body);

    if (inputV.error)
      res.status(400).json({ message: JSON.parse(inputV.error.message) });
    else if (inputV.success) {
      //Check unique
      try {
        const createdL = await PreSaveModel.create({ input });
        return res.status(201).json({ message: "Pre_Save created" });
      } catch {
        return res.status(400).json({ message: "PreSaveModel not created" });
      }
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const input: editPreSave = req.body;

    const inputV = validatePreSave(req.body);
    //Schema Validation
    if (inputV.error)
      res.status(400).json({ message: JSON.parse(inputV.error.message) });
    else if (inputV.success) {
      //Check id
      const idCheck = await PreSaveModel.getByID({ id });
      if (!idCheck) {
        return res.status(404).json({ message: "Id not foud" });
      }
      try {
        const updatedL = await PreSaveModel.update({
          id,
          input: input,
        });
        if (updatedL)
          return await res.status(201).json({ message: "Resource updated" });
      } catch {
        return await res.status(500).json({ message: "Resource not created " });
      }
    }
  }
  
  static async delete(req, res) {
    
    const { id } = req.params;

    if(!id){
      return res.status(400).json({message: "Id not found"})
    }

    const deleted = await PreSaveModel.delete({ id });

    if(!deleted)
      return res.status(400).json({ message: 'Query not deleted' })

    return res.status(200).json({ message: 'Query Deleted' });

  }
}
