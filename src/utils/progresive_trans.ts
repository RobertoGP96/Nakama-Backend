import { Nprisma } from "../../prisma/prisma";
import { createElement } from "../types/element";
import { oldElement } from "../types/old_db";
import { BackupOldDB } from "./save_backup_info";

export async function LimitActionOldDB({
  batchSize,
  delay,
  data,
}: {
  batchSize: number;
  delay: number;
  data: oldElement[];
}) {

  const contentProcess: any[] = [];
  let flag = 0;
  data.map(async (element) => {
    try {
        await BackupOldDB({oldItem: element}) 
    } catch (error) {
      console.error("Error fetching:", error);
    }


    if (jumpFlag(flag, batchSize))
      await new Promise((resolve) => setTimeout(resolve, delay));
    
    flag++;
  });

  return contentProcess;
}

function jumpFlag(flag: number, jump: number): boolean{
    const rel =(flag+1)/jump;
    return rel==Number(rel.toFixed(0))
}