import fs from "fs";
import path from "path";
import { extractMetadata } from "../metadata/extract_metadata";
import { extractInfoSource } from "../collect/extract_info_source";
import { SourceMeta } from "../../types/source";


export async function ReadDirPath(direccion: string): Promise<elementDir[] | undefined> {
  // Verificación de directorio

  if (!fs.existsSync(direccion)) {
    return undefined;
  } else {
    // Lee el contenido del directorio
    try {
      const directorios: elementDir[] = [];
      const contenido = fs.readdirSync(direccion);
      // Filtra solo los directorios de primer nivel
      contenido.map(async (nombre) => {
        const rutaCompleta = path.join(direccion, nombre);
        if (fs.lstatSync(rutaCompleta).isDirectory()) {
          const path = direccion + "\\" + nombre;
          const tmp = nombre.split("] ");
          const title = tmp[1];
          const year = tmp[0].replace("[", "");
          //Analizando contenido del directorio
          const IN = fs.readdirSync(direccion + "\\" + nombre);
          const content: string[] = [];
          IN.map((file) => {
            content.push(file);
          });

          //Metadata
          let metadata: createMetadata= {
            audio: "",
            codec: "",
            duration: 0,
            fps: 0,
            resolution: "",
            storage:0,
            subtitle:"",
          }
          if(IN.length>0 || !(IN.length==1 && IN[0].includes(".srt")) ){

            const videoUrl = content.filter((tmp) => {
              const cut = tmp.split(".");
              return cut[cut.length - 1] != "srt";
            });
            const videoSource = await extractMetadata(path + "\\" + videoUrl).then((tmp)=>{
              
              metadata = extractInfoSource(
                tmp as SourceMeta
              );
              console.log(">> "+metadata.fps)
              const newElement: elementDir = {
                title: title,
                year: year,
                path: path,
                content: content,
                metadata: metadata,
              };
              directorios.push(newElement);
            })

          }
          
        }
      });
      return directorios;
    } catch (error) {
      console.log(error);
    }
    return undefined;
  }
}
