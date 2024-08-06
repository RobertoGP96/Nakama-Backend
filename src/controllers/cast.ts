import cast from '../models/cast'

export class Cast {
  static async getAll(_req, _res) {
    const getall = await cast.getAll()
    _res.status(201).json(cast.getAll)
  }
  static async getByID(_req, _res) {}
  static async delete(_req, _res) {}
  static async create(_req, _res) {}
  static async update(_req, _res) {}
}
