import { Request, Response } from "express";

import { CollectInfo } from "../utils/colect_info";
import db from "../db/backup/old_data.json";
import { exec } from "child_process";
import { ReadDir } from "../utils/read_dir";
import { extractMetadata } from "../utils/copilot";

export class CollectInfoController {
  static async getInfo(_req: Request, res: Response) {
    CollectInfo.collectObject({ oldItem: db[0] })
      .then((tmp) => {
        res.send(tmp);
      })
      .catch((error) => {
        res.status(400).json({ menssage: "Internal Error", error: error });
      });
  }
  static async MakeBackup(_req: Request, _res: Response) {
    const report = {
      total: 0,
      movies: 0,
      series: 0,
      length: db.length,
      ids: new Array<string>(),
    };
    db.forEach((element) => {
      if (element.omdbDB.imdbID != "") {
        report.total++;
        report.ids.push(element.omdbDB.imdbID);
        if (element.omdbDB.Type == "movie") {
          report.movies++;
        } else {
          report.series++;
        }
      }
    });
    _res.send(report);
  }

  static async saveJsonInfo(_req, res) {
    /*const reportSave = {
      saves: [{}],
      error: [{}],
      total: 0,
      length: Data.length,
      };
      try {
        Data.forEach(async (element: oldElement) => {
          const createData = await ElementModel.create({
            input: await SaveObj({ oldItem: element }),
            });
            if (createData) {
              reportSave.saves.push({
                id: createData.id,
                imdbId: element.omdbDB.imdbID,
                title: createData.title,
                });
                } else {
                  reportSave.error.push({
                id: null,
                imdbId: element.omdbDB.imdbID,
                title: element.title_es,
                });
                }
                reportSave.total++;
                });
                return res.status(200).json(reportSave);
                } catch (error) {
      res.status(400).json({ message: "Something wet wrong" });
      console.log("Something wet wrong" + error);
      }
    */
    const scriptPath = "./src/dist/src/utils/make_save.js";

    exec(`node ${scriptPath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing script: ${error.message}`);
        return res.status(500).send(`Error executing script: ${error.message}`);
      }
      if (stderr) {
        console.error(`Script stderr: ${stderr}`);
        return res.status(500).send(`Script stderr: ${stderr}`);
      }
      console.log(`Script output: ${stdout}`);
      res.status(200).send(`Script executed successfully: ${stdout}`);
    });
  }
  static async readDir(req: Request, res: Response) {
    const { url } = req.body;
    if (!url) res.status(400).send({ message: "Undefine Dir_Path" });
    else {
      const dirs = ReadDir(url);

      if (!dirs) res.status(400).send({ message: "Wrong Dir_Path" });
      else res.send({ result: dirs });
    }
  }
  static async readMetadata(req: Request, res: Response) {
    const { url } = req.body;
    if (!url) res.status(400).send({ message: "Undefine Dir_Path" });
    else {
      extractMetadata(url).then((tmp) => {
        res.send({
          results: tmp
        });
      });

      /*if (!dirs) res.status(400).send({ message: "Wrong Dir_Path" });
      else res.send({ result: dirs });*/
    }
  }
}
