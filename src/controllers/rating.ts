import rating from '../models/rating'
export class Rating {
  static async getAll (_req, res) {
    const all = rating.getAll()
    return res.status(201).json(all)
  }
  static async getByID (req, res) {
    const { id } = req.params
    const numId = Number(id)
    
    const getbyId = await rating.getByID({ id: numId })
    
    if(!getbyId)
      return res.staus(400).json({message: "Rating id not found"})
    
    return  res.status(201).json(getbyId)
  }
}
 