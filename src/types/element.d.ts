import { categoryName } from "@prisma/client";
import { createRating, Ratings } from "./ratings";
import { Genre } from "./genre";
import { createGenre } from "./genre";
import { createCredits } from "./credits";

interface Element {
  id: number;
  year: string;
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
  year: string;
  country: string;

  backdrop: string;
  poster: string;

  category: categoryName;

  popularity: number;

  genres: createGenre;

  title: string;
  title_original: string;

  credits: createCredits ;
  external_ids: createExternalIds;
  metadata:  createMetadata;
  ratings:  createRating;

  plot: string;
  abstract: string;
}

type simpleElement = Pick<Element, 'title' | 'title_original' | 'poster'| 'backdrop'| 'category'| 'country'| 'plot'| 'abstract'|'popularity'| 'year' >

type checkElement = {
  id: null | number,
  title: string,
  status: boolean
}