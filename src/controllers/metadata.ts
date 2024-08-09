import metadata from "../models/metadata";
export class Metadata {
  static async getAll(_req, res) {
    const all = metadata.getAll();
    return res.status(201).json(all);
  }
  static async getByID(req, res) {
    const { id } = req.params
    const numId = Number(id)
    
    const getbyId = await metadata.getByID({ id: numId })
    
    if(!getbyId)
      return res.staus(400).json({message: "Metadata id not found"})
    
    return  res.status(201).json(getbyId)
  }
}
