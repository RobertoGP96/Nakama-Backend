import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import fs from 'fs';

function obtenerInfoVideo(direccion: string): Promise<void> {
    return new Promise((resolve, reject) => {
        // Verifica si el archivo existe
        if (!fs.existsSync(direccion)) {
            return reject(new Error('El archivo no existe.'));
        }

        // Usa fluent-ffmpeg para obtener la información del video
        ffmpeg.ffprobe(direccion, (err, metadata) => {
            if (err) {
                return reject(err);
            }

            const formato = metadata.format.format_name;
            const codec = metadata.streams.map((stream: any) => stream.codec_name).join(', ');
            const duracion = metadata.format.duration;

            console.log(`Formato: ${formato}`);
            console.log(`Codec: ${codec}`);
            console.log(`Duración: ${duracion} segundos`);

            resolve();
        });
    });
}