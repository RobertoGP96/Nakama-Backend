import { CastModel } from '../models/cast'

export class CastController {
  static async getAll(_req, res) {
    const getall = await CastModel.getAll()
    if (!getall) {
      return res.status(400).json({ message: "Is Empty" });
    } else {
      res.status(200).json(getall);
    }
  }
  static async getByID(_req, res) {
    const { id } = _req.params
    const numId = Number(id)
    
    const getbyId = await CastModel.getByID({ id: numId })
    
    if(!getbyId)
      return res.staus(400).json({message: "CastModel id not found"})
    
    return  res.status(200).json(getbyId)
  }
}
