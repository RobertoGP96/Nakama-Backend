import { createElement, Element } from "../../types/element";
import { omdbElement } from "../../types/omdb";
import { BigQuery, Cast } from "../../types/tmdb";

import { createCredits } from "../../types/credits";
import { createCast } from "../../types/cast";
import { createGenre } from "../../types/genre";
import { genreName } from "@prisma/client";
import { oldElement } from "../../types/old_db";
import { TmdbServise } from "../../services/tmdb";
import { OMDBServise } from "../../services/omdb";

import {tmdb_genres} from "./tmdb_genres"

export class CollectInfo {
  static takeInfo = ({
    tmdbItem,
    omdbItem,
  }: {
    tmdbItem: BigQuery;
    omdbItem: omdbElement;
  }): createElement => {
    const newElement: createElement = {
      title: tmdbItem.title,
      abstract: "",
      backdrop_path: tmdbItem.backdrop_path,
      poster_path: tmdbItem.poster_path,
      popularity: tmdbItem.popularity,
      Category: omdbItem.Type == "movie" ? "Pelicula" : "Serie",
      country: omdbItem.Country,
      original_title: tmdbItem.original_title,
      plot: tmdbItem.overview,
      year: Number(omdbItem.Year),

      externalids: {
        imdb_id: tmdbItem.imdb_id,
        tmdb_id: String(tmdbItem.id),
        omdb_id: "",
      },

      metadata: {
        elementId:0,
        path:"",
        audio: "EN",
        codec: "h264",
        duration: 82.34,
        resolution: "1080",
        fps: 23.99,
        storage: 1.5,
        subtitle: "ES",
      },

      credits: this.collectCredits({
        tmdbItem,
      }),

      genres: this.collectGenres({ tmdbItem }),

      ratings: {
        imdb_rating: omdbItem.imdbRating?Number(omdbItem.imdbRating):0,
        imdb_votes: omdbItem.imdbVotes?Number(omdbItem.imdbVotes.replace(",","")):0,
        mc_rating: 0,
        mc_votes: 0,
        rotten_rating: 0,
        rotten_votes: 0,
      },
    };
    return newElement;
  };
  static collectCredits = ({
    tmdbItem,
  }: {
    tmdbItem: BigQuery;
  }): createCredits => {
    const casting: createCast[] = [];
    //
    if (tmdbItem.credits.cast.length > 0) {
      tmdbItem.credits.cast.map((tmp: Cast) => {
        casting.push({
          name: tmp.name,
          originalName: tmp.original_name,
          character: tmp.character as string,
          department: "ACTOR",
        });
      });
    }
    //
    const getDirector = tmdbItem.credits.crew.filter((tmp: Cast) => {
      return (tmp.department as string) == "Directing";
    });
    if (getDirector.length > 0) {
      casting.push({
        name: getDirector[0].name,
        originalName: getDirector[0].original_name,
        character: "",
        department: "DIRECTOR",
      });
    }

    return {
      cast_members: casting,
    };
  };
  static collectGenres = ({
    tmdbItem,
  }: {
    tmdbItem: BigQuery;
  }): createGenre => {
    const newGenres: genreName[] = [];

    tmdbItem.genres.map((tmp) => {
      newGenres.push(this.formatGenreName(tmp.name));
    });

    return {
      genres: newGenres,
    };
  };

  static formatGenreName = (name: string): genreName => {
    const genre_trans = tmdb_genres.filter((genre)=>genre.name==name)
    console.log(name+""+genre_trans[0])
    return genre_trans[0].translate
  };

  static collectObject = async ({
    oldItem,
  }: {
    oldItem: oldElement;
  }): Promise<collectObject> => {
    const old_find_id = await TmdbServise.FindByImdbId({
      imdbId: oldItem.omdbDB.imdbID,
    });
    const result_object = {
      tmdbItem: await TmdbServise.BigQueryES({
        tmdbId:
          oldItem.omdbDB.Type == "movie"
            ? String(old_find_id.movie_results[0].id)
            : String(old_find_id.tv_results[0].id),
        lang: "es-ES",
        type: oldItem.omdbDB.Type == "movie" ? "movie" : "tv",
      }),
      omdbItem: await OMDBServise.getByID({
        id: oldItem.omdbDB.imdbID,
        type: oldItem.omdbDB.Type,
        year: undefined,
      }),
    };
    return result_object;
  };
}

type collectObject = {
  tmdbItem: BigQuery;
  omdbItem: omdbElement;
};
