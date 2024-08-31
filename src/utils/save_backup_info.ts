/*
import { oldElement } from "../types/old_db";
import { TmdbServise } from "../services/tmdb";
import { OMDBServise } from "../services/omdb";

import { CollectInfo } from "./colect_info";
import { categoryName } from "@prisma/client";
export async function SaveObj({ oldItem }: { oldItem: oldElement }) {
  const tmdbresult = await TmdbServise.FindByImdbId({
    imdbId: oldItem.omdbDB.imdbID,
  });

  const tmdbItem = await TmdbServise.BigQueryES({
    tmdbId: oldItem.omdbDB.imdbID,
    type: oldItem.omdbDB.Type,
  });

  const omdbItem = await OMDBServise.getByID({
    id: oldItem.omdbDB.imdbID,
    year: oldItem.omdbDB.Year,
    type: oldItem.omdbDB.Type,
  });

  return {
    
    title: oldItem.title_es,
    abstract: "",
    backdrop_path: tmdbItem.backdrop_path,
    poster_path: tmdbItem.poster_path,
    popularity: tmdbItem.popularity,
    Category: omdbItem.Type == "movie" ? categoryName.Pelicula: categoryName.Serie,
    country: omdbItem.Country,
    original_title: tmdbItem.original_title,
    plot: oldItem.plot_es,
    year: Number(omdbItem.Year),

    externalids: {
      imdb_id: omdbItem.imdbID,
      tmdb_id: String(tmdbItem.id),
      omdb_id: "",
    },

    metadata: {
      audio: "EN",
      codec: "h264",
      duration: 82.34,
      resolution: "1080",
      fps: 23.99,
      storage: 1.5,
      subtitle: "ES",
    },

    credits: CollectInfo.collectCredits({
      tmdbId: String(tmdbItem.id),
      type: omdbItem.Type == "Movie" ? "movie" : "tv",
    }),

    genres: CollectInfo.collectGenres({ tmdbItem }),

    ratings: {
      imdb_rating: Number(omdbItem.imdbRating),
      imdb_votes: Number(omdbItem.imdbVotes),
      mc_rating: 0,
      mc_votes: 0,
      rotten_rating: 0,
      rotten_votes: 0,
    },
  };
}
*/