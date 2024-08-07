import resource from "../models/resource";
export class Resource {
  static async getAll(_req, res) {
    const getall = await resource.getAll();
    return res.status(201).json(getall);
  }
  static async getByID(req, res) {
    const { id } = req.params;
    const getbyId = await resource.getByID({ id });
    res.status(201).json(getbyId);
  }
  static async delete(req, res) {
    const { id } = req.params;
    const getbyId = await resource.getByID({ id });
    return res.status(201).json(getbyId);
  }
  static async create(req, res) {
    const input = req.body;

    const createdL = await resource.create({ input });

    if (!createdL)
      return res.status(400).json({ message: "Resource not created" });

    return res.status(201).json({ message: "Resource created" });
  }

  static async update(req, res) {
    const { id } = req.params
    const input = req.body

    const updatedL = await resource.update({id, input})
    
    if(!updatedL)
      return res.status(400).json({ message: 'Resource not found' })
    
    return res.status(201).json({ message: 'Resource updated' })
  }
}
