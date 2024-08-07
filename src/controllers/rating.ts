import rating from '../models/rating'
export class Rating {
  static async getAll (_req, res) {
    const all = rating.getAll()
    return res.status(201).json(all)
  }
  static async getByID (req, res) {
    const { id } = req.params
    const getbyId = await rating.getByID({ id })
    return res.status(201).json(getbyId)
  }
}
 