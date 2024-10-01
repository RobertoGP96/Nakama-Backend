import { ElementModel } from "../models/element";

import { Request, Response } from "express";
import { validateElement } from "../schemas/NakamaElement";
import { createMany } from "../types/controllers";
import { Filter } from "../types/filter";
import { Element, externalids } from "@prisma/client";
import { ExtermalIdsModel } from "../models/externalids";
import { checkElement } from "../types/element";
export class ElementController {
  static async getAll(_req: Request, res: Response) {
    const getall = await ElementModel.getAll();
    if (!getall) return res.status(400).json({ message: "Empty Source" });
    return res.status(200).json(getall);
  }
  static async getByID(req, res) {
    const { id } = req.params;
    const numID = Number(id);
    try {
      const getbyId = await ElementModel.getByID({ id: numID });
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
    const idCheck = ElementModel.getByID({ id: numId });
    if (!idCheck) return res.status(400).json({ message: "Id not found" });
    try {
      const deleted = await ElementModel.delete({ id });
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
        const createdL = await ElementModel.create({ input });
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
    const updatedL = await ElementModel.update({ id, input });
    try {
      if (!updatedL)
        return res.status(400).json({ message: "Element not found" });

      return res.status(200).json({ message: "Element updated" });
    } catch {
      return res.status(400).json({ message: "Error updating" });
    }
  }

  static async createMany(req: Request, res: Response) {
    try {
      const input: createMany = req.body;
      if (!input) res.status(400);

      const outResult: checkElement[] = [];

      input.data.map(async (e) => {
        const element = await ElementModel.create({ input: e });
        if (!element) {
          outResult.push({
            id: null,
            title: e.title,
            status: false,
          });
        } else
          outResult.push({
            id: element.id,
            title: element.title,
            status: true,
          });
      });
      res.json(outResult);
    } catch {
      res.status(400).json({ message: "Error creating many" });
    }
  }

  static async search(req: Request, res: Response) {
    const filters: Filter = req.body;
    const results = (await ElementModel.getAll()).filter((e: Element) => {
      return (
        filters.title.toLowerCase().includes(e.title) ||
        filters.title.toLowerCase().includes(e.title_original) ||
        (Number(filters.year[0]) >=  Number(e.year) && Number(filters.year[1]) <= Number(e.year)) ||
        filters.country == e.country ||
        filters.category.toLocaleString().includes(e.category)
      );
    });
    res.status(200).json(results);
  }

  static async searchByExternal(req: Request, res: Response) {
    const IDs: createExternalIds = req.body;
    try {
      const resultsIds = (await ExtermalIdsModel.getAll()).filter(
        (e: externalids) => {
          e.imdb_id == IDs.imdb_id ||
            e.omdb_id == IDs.omdb_id ||
            e.tmdb_id == IDs.tmdb_id;
        }
      );
      const results = await ElementModel.findMany({ IDs: resultsIds });
      return res.status(200).json(results);
    } catch {
      return res.status(400).json({ message: "Error on filtering" });
    }
  }
}
