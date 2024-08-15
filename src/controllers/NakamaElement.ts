import { NakamaElementModel } from "../models/NakamaElement";

import { Request, Response } from "express";
import { validateElement } from "../schemas/NakamaElement";
import { createMany } from "../types/controllers";
import { Filter } from "../types/filter";
import { Element } from "@prisma/client";
export class NakamaElementController {
  static async getAll(_req: Request, res: Response) {
    const getall = await NakamaElementModel.getAll();
    if (!getall) return res.status(400).json({ message: "Empty Source" });
    return res.status(200).json(getall);
  }
  static async getByID(req, res) {
    const { id } = req.params;
    const numID = Number(id);
    try {
      const getbyId = await NakamaElementModel.getByID({ id: numID });
      if (!getbyId)
        return res.status(400).json({ message: "Element not found" });
      return res.status(200).json(getbyId);
    } catch {
      return res.status(200).json({ message: "Error serching by id" });
    }
  }
  static async delete(req, res) {
    const { id } = req.params;
    const numId = Number(id);
    //ID Check
    const idCheck = NakamaElementModel.getByID({ id: numId });
    if (!idCheck) return res.status(400).json({ message: "Id not found" });
    try {
      const deleted = await NakamaElementModel.delete({ id });
      if (!deleted)
        return res.status(400).json({ message: "Element not found" });
      return res.status(200).json({ message: "Element deleted" });
    } catch {
      return res.status(400).json({ message: "Error deleting" });
    }
  }
  static async create(req, res) {
    const input = req.body;

    const inputV = validateElement(req.body);
    //Schema Validation
    if (inputV.error)
      res.status(400).json({ message: JSON.parse(inputV.error.message) });
    else {
      try {
        const createdL = await NakamaElementModel.create({ input });
        if (!createdL)
          return res.status(400).json({ message: "Element not created" });
        return res.status(201).json({ message: "Element created" });
      } catch {
        res.status(400).json({ message: "Error creating" });
      }
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const input = req.body;
    const updatedL = await NakamaElementModel.update({ id, input });
    try {
      if (!updatedL)
        return res.status(400).json({ message: "Element not found" });

      return res.status(200).json({ message: "Element updated" });
    } catch {
      return res.status(400).json({ message: "Error updating" });
    }
  }

  static async createMany(req : Request, res: Response) {
    const input: createMany = req.body;
    try{
      input.data.map(e => {
        NakamaElementModel.create({ input: e })
      })
    }
    catch{
      res.status(400).json( { message: "Error creating many" } )
    }
    
  }

  static async search( req :Request, res : Response ){
    const filters: Filter  = req.body
    const results = (await NakamaElementModel.getAll()).filter( (e : Element) =>{
      return filters.title.toLowerCase().includes(e.title)||filters.title.toLowerCase().includes(e.title_original) || 
      ( filters.year[0]>=e.year && filters.year[1]<=e.year ) || ( filters.country==e.country ) || 
      ( filters.category.toLocaleString().includes(e.category) )
    })
    res.status(200).json(results)
  }
}
