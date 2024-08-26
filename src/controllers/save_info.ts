import Data from "../db/backup/old_data.json";
import { ElementModel } from "../models/element";
import { oldElement } from "../types/old_db";
import { SaveObj } from "../utils/save_backup_info";

export class SaveInfoController {
  static async saveJsonInfo(_req, res) {
    const reportSave = {
      saves: [{}],
      error: [{}],
      total: 0,
      length: Data.length,
    };
    Data.forEach(async (element: oldElement) => {
      try {
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
        return res.status(200).json(reportSave);
      } catch (error) {
        res.status(400).json({ message: "Something wet wrong" });
        console.log("Something wet wrong" + error);
      }
    });
  }
}
