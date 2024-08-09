import genre from '../models/genre'
export class Genre {
  static async getAll (_req, res) {
    const all = genre.getAll()
    return res.status(201).json(all)
  }
  static async getByID (req, res) {
    const { id } = req.params
    const numId = Number(id)
    
    const getbyId = await genre.getByID({ id: numId })
    
    if(!getbyId)
      return res.staus(400).json({message: "Genre id not found"})
    
    return  res.status(201).json(getbyId)
  }
}
