import fs from "fs";
import path from "path";

type elementDir = {
  title: string;
  year: string;
  path: string;
  constent: string[];
};

export function ReadDir(direccion: string): elementDir[] | undefined {
  // Verifica si la dirección es un directorio

  if (!fs.existsSync(direccion)) {
    return undefined;
  } else {
    // Lee el contenido del directorio
    try {
      const directorios: elementDir[] = [];
      const contenido = fs.readdirSync(direccion);
      // Filtra solo los directorios de primer nivel
      contenido.map((nombre) => {
        const rutaCompleta = path.join(direccion, nombre);
        if (fs.lstatSync(rutaCompleta).isDirectory()) {
          const newElement: elementDir = {
            title: "",
            year: "",
            path: "",
            constent: [],
          };
          newElement.path = direccion + "\\" + nombre;

          const tmp = nombre.split("] ");

          newElement.title = tmp[1];
          newElement.year = tmp[0].replace("[", "");
          //Analizando contenido del directorio
          const IN = fs.readdirSync(direccion + "\\" + nombre);
          IN.map((file) => {
            newElement.constent.push(file);
          });

          directorios.push(newElement);
        }
      });
      return directorios;
    } catch (error) {
      console.log(error);
    }
    return undefined;
  }
}
