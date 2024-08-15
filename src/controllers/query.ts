import { QueryModel } from "../models/query";
export class QueryController {
  static async getAll(_req, res) {
    const getall = await QueryModel.getAll();
    return res.status(200).json(getall);
  }
  static async getByID(req, res) {
    const { id } = req.params;
    const getbyId = await QueryModel.getByID({ id });
    return res.status(200).json(getbyId);
  }
  static async delete(req, res) {
    const { id } = req.params;
    const deleted = await QueryModel.delete({ id });

    if(!deleted)
      return res.status(400).json({ message: 'Query not deleted' })

    return res.status(201).json({ message: 'Query Deleted' });
  }
  static async create(req, res) {
    const { id:uId } = req.params
    const input = req.body

    const createdQ = await QueryModel.create({uId , input})

    if(!createdQ)
      return res.status(400).json({ message: 'Query not created' })
    
    return res.status(201).json({ message: 'Query created' })
  }
  static async update(req, res) {
    const { id } = req.params
    const input = req.body

    const updatedQ = await QueryModel.update({id, input})
    
    if(!updatedQ)
      return res.status(400).json({ message: 'Query not found' })
    
    return res.status(201).json({ message: 'Query updated' })
  }
}
