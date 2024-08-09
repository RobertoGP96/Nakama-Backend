import cast from '../models/cast'

export class Cast {
  static async getAll(_req, _res) {
    const getall = await cast.getAll()
    return  _res.status(201).json(getall)
  }
  static async getByID(_req, res) {
    const { id } = _req.params
    const numId = Number(id)
    
    const getbyId = await cast.getByID({ id: numId })
    
    if(!getbyId)
      return res.staus(400).json({message: "Cast id not found"})
    
    return  res.status(201).json(getbyId)
  }
}
