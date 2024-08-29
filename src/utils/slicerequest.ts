/** 
import express from 'express';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

// Cargar los IDs de TMDB desde un archivo JSON
const tmdbIds = require('./tmdbIds.json'); // Asegúrate de que este archivo exista

const TMDB_API_KEY = 'YOUR_TMDB_API_KEY';
const REQUEST_LIMIT = 40; // Número máximo de solicitudes
const TIME_FRAME = 11000; // Tiempo en milisegundos (10 segundos)

app.get('/fetch-movies', async (req, res) => {
  try {
    for (let i = 0; i < tmdbIds.length; i += REQUEST_LIMIT) {
      const batch = tmdbIds.slice(i, i + REQUEST_LIMIT);
      const requests = batch.map(id =>
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`)
      );

      // Esperar a que todas las solicitudes del lote se completen
      const responses = await Promise.all(requests);

      // Guardar los datos en la base de datos
      for (const response of responses) {
        const movieData = response.data;

        await prisma.movie.upsert({
          where: { tmdbId: movieData.id },
          update: {
            title: movieData.title,
            overview: movieData.overview,
            // Actualiza otros campos según sea necesario
          },
          create: {
            tmdbId: movieData.id,
            title: movieData.title,
            overview: movieData.overview,
            // Crea otros campos según sea necesario
          },
        });
      }

      // Esperar 10 segundos antes de procesar el siguiente lote
      if (i + REQUEST_LIMIT < tmdbIds.length) {
        await new Promise(resolve => setTimeout(resolve, TIME_FRAME));
      }
    }

    res.status(200).send('Movies fetched and saved successfully.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching movies.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/