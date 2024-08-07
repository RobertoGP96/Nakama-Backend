import { categoryName } from "@prisma/client";
import { Ratings } from "./ratings";
import { Genre } from "./data";

interface element {
  id: number;
  year: number;
  country: string;

  backdrop_path: string;
  poster_path: string;

  Category: categoryName;

  popularity: number;

  genres: GenreC;

  imdb_id: string;
  imdbRating:  number;
  imdbVotes: number;

  title: string;
  original_title: string;

  credits: Credits ;
  externalids: ExternalIds;
  metadata:  Metadata;
  ratings:  Ratings;

  plot: string;
  abstract: string;
}
