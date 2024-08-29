import { Request, Response } from "express";

import { Axios } from "axios";
import { TmdbServise } from "../services/tmdb";

export class TmdbController {
  static async getDetails(req: Request, res: Response) {
    const { id, type } = req.params;
    const out = await TmdbServise.Details({ tmdbId: id, type });
    if (!out) res.status(400).json({ message: "Id not found" });
    res.send(out);
  }
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
  static async getImages(req: Request, res: Response) {
    const { id, type } = req.params;
    const out = await TmdbServise.Images({
      tmdbId: id,
      type
    });
    if (!out) res.status(400).json({ message: "Id not found" });
    res.send(out);
  }
  static async Credits(req: Request, res: Response) {
    const { id, type } = req.params;
    const out = await TmdbServise.Credits({
      tmdbId: id,
      type
    });
    if (!out) res.status(400).json({ message: "Id not found" });
    res.send(out);
  }
  static async Search(req: Request, res: Response) {
    const { search, type , page} = req.params;
    const out = await TmdbServise.Search({
      pageParam: Number(page),
      search,
      type
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
