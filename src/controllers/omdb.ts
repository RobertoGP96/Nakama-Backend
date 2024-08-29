import { Request, Response } from "express";

import { TmdbController } from '../controllers/tmdb'
import { OMDBServise } from "../services/omdb";

export class OmdbController {
    static async getByID(req: Request, res: Response) {
        const { id, type, year } = req.params;
        const out = await OMDBServise.getByID({ id, type, year: year?year: undefined });
        if (!out) res.status(400).json({ message: "Id not found" });
        res.send(out);
      }
      static async getByTitle(req: Request, res: Response) {
        const { title, type, year } = req.params;
        const out = await OMDBServise.getByTitle({ title, year, type });
        if (!out) res.status(400).json({ message: "Not found results" });
        res.send(out);
      }
      static async Search(req: Request, res: Response) {
        const { search, type, year } = req.params;
        const out = await OMDBServise.getBySearch({ search, type, year });
        if (!out) res.status(400).json({ message: "Not found results" });
        res.send(out);
      }
}