import { categoryName } from "@prisma/client";
import { createRating, Ratings } from "./ratings";
import { Genre } from "./genre";
import { createGenre } from "./genre";
import { createCredits } from "./credits";

interface Element {
  id: number;
  year: number;
  country: string;

  backdrop: string;
  poster: string;

  category: categoryName;

  popularity: number;
  
  title: string;
  title_original: string;

  plot: string;
  abstract: string;
  
  
  genres: Genre;
  credits: Credits;
  external_ids: ExternalIds;
  metadata:  Metadata;
  ratings:  Ratings;

}
type editElement = Omit<Element, 'id' >
interface createElement {
  year: number;
  country: string;

  backdrop_path: string;
  poster_path: string;

  Category: categoryName;

  popularity: number;

  genres: createGenre;

  title: string;
  original_title: string;

  credits: createCredits ;
  externalids: createExternalIds;
  metadata:  createMetadata;
  ratings:  createRating;

  plot: string;
  abstract: string;
}