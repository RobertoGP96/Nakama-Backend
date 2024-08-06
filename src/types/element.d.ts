interface Elment {
  id: number;
  year: null | string;
  country: string;

  backdrop_path: undefined | string;
  poster_path: undefined | string;

  Category: undefined | string;

  popularity: number;

  genres_id: undefined | number;

  imdb_id: undefined | string | null;
  imdbRating: undefined | number;
  imdbVotes: undefined | number;

  title: undefined | string;
  original_title: undefined | string;

  credits_id: undefined | null | number;
  externalids_id: undefined | null | number;
  metadata_id: undefined | null | number;
  ratings_id: undefined | null | number;

  plot: string;
  abstract: undefined | string;
}
