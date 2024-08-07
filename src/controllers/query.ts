import query from "../models/query";
export class Query {
  static async getAll(_req, res) {
    const getall = await query.getAll();
    return res.status(201).json(getall);
  }
  static async getByID(req, res) {
    const { id } = req.params;
    const getbyId = await query.getByID({ id });
    return res.status(201).json(getbyId);
  }
  static async delete(req, res) {
    const { id } = req.params;
    const deleted = await query.delete({ id });

    if(!deleted)
      return res.status(400).json({ message: 'Query not deleted' })

    return res.status(201).json({ message: 'Query Deleted' });
  }
  static async create(req, res) {
    const { id:uId } = req.params
    const input = req.body

    const createdQ = await query.create({uId , input})

    if(!createdQ)
      return res.status(400).json({ message: 'Query not created' })
    
    return res.status(201).json({ message: 'Query created' })
  }
  static async update(req, res) {
    const { id } = req.params
    const input = req.body

    const updatedQ = await query.update({id, input})
    
    if(!updatedQ)
      return res.status(400).json({ message: 'Query not found' })
    
    return res.status(201).json({ message: 'Query updated' })
  }
}
