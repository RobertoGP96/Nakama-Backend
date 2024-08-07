import cast from '../models/cast'

export class Cast {
  static async getAll(_req, _res) {
    const getall = await cast.getAll()
    _res.status(201).json(getall)
  }
  static async getByID(_req, _res) {
    const { id } = _req.params
    const getbyId = await cast.getByID(id)
    _res.status(201).json(getbyId)
  }
  static async update(_req, _res) {
    const { id } = _req.params
    const {input} = _req.body
    cast.update(id, input)
  }
}
