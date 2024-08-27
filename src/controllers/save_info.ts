import Data from "../db/backup/old_data.json";
import { ElementModel } from "../models/element";
import { oldElement } from "../types/old_db";
import { SaveObj } from "../utils/save_backup_info";

import { exec } from 'child_process';

export class SaveInfoController {
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
    const scriptPath = '../utils/make_save.js';

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
}
