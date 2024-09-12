import { Request, Response } from "express";

import { Axios } from "axios";
import { TmdbServise } from "../services/tmdb";

export class TmdbController {
  //Details
  static async getDetails(req: Request, res: Response) {
    const { id, type } = req.params;
    const out = await TmdbServise.Details({ tmdbId: id, type });
    if (!out) res.status(400).json({ message: "Id not found" });
    res.send(out);
  }
  //Details with credits, images, externals ids
  static async bigQueryES(req: Request, res: Response) {
    const { id, type } = req.params;
    const out = await TmdbServise.BigQueryES({
      tmdbId: id,
      type,
      lang: "es-ES",
    });
    if (!out) res.status(400).json({ message: "Id not found" });
    res.send(out);
  }
  //Images
  static async getImages(req: Request, res: Response) {
    const { id, type } = req.params;
    const out = await TmdbServise.Images({
      tmdbId: id,
      type
    });
    if (!out) res.status(400).json({ message: "Id not found" });
    res.send(out);
  }
  //Credits
  static async Credits(req: Request, res: Response) {
    const { id, type } = req.params;
    const out = await TmdbServise.Credits({
      tmdbId: id,
      type
    });
    if (!out) res.status(400).json({ message: "Id not found" });
    res.send(out);
  }
  //Search
  static async Search(req: Request, res: Response) {
    const { search, type , page, year} = req.params;
    const out = await TmdbServise.Search({
      pageParam: Number(page),
      search,
      type,
      year
    });
    if (!out) res.status(400).json({ message: "Id not found" });
    res.send(out);
  }

  static async getExternalIds(req: Request, res: Response) {
    const { id, type } = req.params;
    const out = await TmdbServise.ExternalsIds({
      tmdbId: id,
      type
    });
    if (!out) res.status(400).json({ message: "Id not found" });
    res.send(out);
  }
}
