import { CreditsModel } from '../models/credits';
export class CreditsController {
  static async getAll (_req, res) {
    const getall = CreditsModel.getAll()
    if (!getall) {
      return res.status(404).json({ message: "Is Empty" });
    } else {
      res.status(200).json(getall);
    }
  }
  static async getByID (req, res) {
    const { id } = req.params
    const numId = Number(id)
    
    const getbyId = await CreditsModel.getByID({ id: numId })
    
    if(!getbyId)
      return res.staus(400).json({message: "CreditsModel id not found"})
    
    return  res.status(200).json(getbyId)
  }
}
