import credits from '../models/credits'
export class Credits {
  static async getAll (_req, res) {
    const all = credits.getAll()
    return  res.status(201).json(all)
  }
  static async getByID (req, res) {
    const { id } = req.params
    const numId = Number(id)
    
    const getbyId = await credits.getByID({ id: numId })
    
    if(!getbyId)
      return res.staus(400).json({message: "Credits id not found"})
    
    return  res.status(201).json(getbyId)
  }
}
