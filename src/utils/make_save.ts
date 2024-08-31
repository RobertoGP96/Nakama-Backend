/*import Data from "../db/backup/old_data.json";
import { oldElement } from "../types/old_db";
import { ElementModel } from "../models/element";
import { SaveObj } from "./save_backup_info";


async function main() {
  const reportSave = {
    saves: [{}],
    error: [{}],
    total: 0,
    length: Data.length,
  };

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
  console.log("Datos importados correctamente");
  console.log(reportSave);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
*/