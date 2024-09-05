import axios from 'axios';
import { createElement } from '../types/element';
import { oldElement } from '../types/old_db';

async function fetchMoviesFromTMDB(data: oldElement[]) {
    const apiKey = 'YOUR_TMDB_API_KEY';
    const batchSize = 35;
    const delay = 12000; // 12 seconds

    const movies: createElement[] = []; // Array to store the fetched movies

    for (let i = 0; i < data.length; i += batchSize) {
        const batch = data.slice(i, i + batchSize);

        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movies/${}`, {
                params: {
                    api_key: apiKey,
                    ids: batch.map((item) => item.omdbDB.imdbID).join(','),
                },
            });

            // Process the response data here
            const fetchedMovies = response.data.results;
            movies.push(...fetchedMovies.map((movie: any) => createElement(movie)));

        } catch (error) {
            console.error('Error fetching movies from TMDB:', error);
        }

        await new Promise((resolve) => setTimeout(resolve, delay));
    }

    return movies;
}

function createElement(movie: any) {
    // Create and return the element based on the movie data
    // Implement your logic here
    return movie;
}