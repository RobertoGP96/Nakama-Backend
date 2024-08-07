import cast from '../models/cast'

export class Cast {
  static async getAll(_req, _res) {
    const getall = await cast.getAll()
    return  _res.status(201).json(getall)
  }
  static async getByID(_req, _res) {
    const { id } = _req.params
    const getbyId = await cast.getByID({ id })
    return  _res.status(201).json(getbyId)
  }
}
