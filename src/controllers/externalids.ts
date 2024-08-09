import ExtermalIds from "../models/externalids"
export class Credits {
  static async getAll (_req, res) {
    const all = ExtermalIds.getAll()
    return  res.status(201).json(all)
  }
  static async getByID (req, res) {
    const { id } = req.params
    const numId = Number(id)
    
    const getbyId = await ExtermalIds.getByID({ id: numId })
    
    if(!getbyId)
      return res.staus(400).json({message: "External Ids not found"})
    
    return  res.status(201).json(getbyId)
  }
}