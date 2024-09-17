import { Request, Response } from "express";

//import { CollectInfo } from "../utils/collect/colect_info";
//import { exec } from "child_process";
import { ReadDirPath } from "../utils/path/read_dir";
import { extractMetadata } from "../utils/metadata/extract_metadata";
//import { LimitActionOldDB } from "../utils/querys/progresive_trans";
//import { BackupOldDBAltern } from "../utils/backup/save_backup_info";
//import { ElementModel } from "../models/element";

export class CollectInfoController {
  static async getInfo(_req: Request, _res: Response) {
    /*
    CollectInfo.collectObject({ oldItem: db[0] })
      .then((tmp) => {
        res.send(tmp);
      })
      .catch((error) => {
        res.status(400).json({ menssage: "Internal Error", error: error });
      });*/
  }
  static async MakeBackup(_req: Request, _res: Response) {
    /*
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
    */
  }

  static async readDir(req: Request, res: Response) {
    const { url } = req.body;
    if (!url) res.status(400).send({ message: "Undefine Dir_Path" });
    else {
      ReadDirPath(url).then((dirs) => {
        if (!dirs) res.status(400).send({ message: "Wrong Dir_Path" });
        else res.send({ result: dirs });
      });
    }
  }
  static async readMetadata(req: Request, res: Response) {
    const { url } = req.body;
    if (!url) res.status(400).send({ message: "Undefine Dir_Path" });
    else {
      extractMetadata(url).then((tmp) => {
        res.send({
          results: tmp,
        });
      });
    }
  }
  /*static async readOldDB(_req: Request, res: Response) {
    LimitActionOldDB({ batchSize: 30, data: db, delay: 15000 });
    res.send({ status: "start process" });
  }
  static async read_test(_req: Request, res: Response) {
    BackupOldDBAltern({ oldItem: db[0] }).then((tmp) => {
      ElementModel.create({ input: tmp }).then((newE) => {
        res.send(newE);
      });
    });
  }
  */
}
