import fs from "fs";
import path from "path";
import { extractMetadata } from "../metadata/extract_metadata";
import { extractInfoSource } from "../collect/extract_info_source";
import { SourceMeta } from "../../types/source";


export async function ReadDirPath(direccion: string): Promise<elementDir[] | undefined> {
  // Verificación de directorio
  const directorios: elementDir[] = [];
  
  if (!fs.existsSync(direccion)) {
    return ;
  } else {
    // Lee el contenido del directorio
    try {
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
          directorios.push({
            path: path,
            title: title,
            year: year,
            content:content
          })
        }
      });
    } catch (error) {
      console.log(error);
    }
    return directorios;
  }
}
