import fs from 'fs';
import path from 'path';

function ReadDir(direccion: string): string[] {
    // Verifica si la dirección es un directorio
    if (!fs.existsSync(direccion) || !fs.lstatSync(direccion).isDirectory()) {
        throw new Error('La dirección proporcionada no es un directorio válido.');
    }

    // Lee el contenido del directorio
    const contenido = fs.readdirSync(direccion);
    const directorios: string[] = [];

    // Filtra solo los directorios de primer nivel
    contenido.map((nombre)=>{
        const rutaCompleta = path.join(direccion, nombre);
        if (fs.lstatSync(rutaCompleta).isDirectory()) {
            directorios.push(nombre);
        }
    })

    return directorios;
}