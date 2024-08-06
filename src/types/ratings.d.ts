import { number } from "zod";

interface Ratings {
  id: number;
  element_id: number;

  imdb_rating: number;
  imdb_votes: number;
  rotten_rating: number;
  rotten_votes: number;
  mc_rating: number;
  mc_votes: number;
}
