import { createElement, Element } from "../types/element";
import { omdbElement } from "../types/omdb";
import { Cast, tmdbCredits, tmdbDetail, tmdbTraslations } from "../types/tmdb";

import { TmdbServise } from "../services/tmdb";
import { createCredits } from "../types/credits";
import { createCast } from "../types/cast";
import { get } from "http";
import { createGenre } from "../types/genre";
import { genreName } from "@prisma/client";

export class CollectInfo {
  static takeInfo = ({
    tmdbItem,
    omdbItem,
  }: {
    tmdbItem: tmdbDetail;
    omdbItem: omdbElement;
  }): createElement => {
    const es_info = this.getEStranslation({
      tmdbId: String(tmdbItem.id),
      type: omdbItem.Type == "Movie" ? "movie" : "tv",
    });

    const newElement: createElement = {
      title: es_info.title,
      abstract: "",
      backdrop_path: tmdbItem.backdrop_path,
      poster_path: tmdbItem.poster_path,
      popularity: tmdbItem.popularity,
      Category: omdbItem.Type == "movie" ? "Pelicula" : "Serie",
      country: omdbItem.Country,
      original_title: tmdbItem.original_title,
      plot: es_info.plot,
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

      credits: this.collectCredits({
        tmdbId: String(tmdbItem.id),
        type: omdbItem.Type == "Movie" ? "movie" : "tv",
      }),

      genres: this.collectGenres({ tmdbItem }),

      ratings: {
        imdb_rating: Number(omdbItem.imdbRating),
        imdb_votes: Number(omdbItem.imdbVotes),
        mc_rating: 0,
        mc_votes: 0,
        rotten_rating: 0,
        rotten_votes: 0,
      },
    };
    return newElement;
  };
  static collectCredits = ({
    tmdbId,
    type,
  }: {
    tmdbId: string;
    type: "movie" | "tv";
  }): createCredits => {
    let tmdbCredits: tmdbCredits = 
    {cast: [],
      crew:[],
      id: 0,
      tmdbCredits: ""
    }
    TmdbServise.Credits({
      tmdbId,
      type: type,
    }).then(cred =>{
      tmdbCredits = cred
    }
    )
    const casting: createCast[] = [];
    //
    tmdbCredits.cast.map((tmp: Cast) => {
      casting.push({
        name: tmp.name,
        originalName: tmp.original_name,
        character: tmp.character as string,
        department: "ACTOR",
      });
    });
    //
    const getDirector = tmdbCredits.crew.filter((tmp: Cast) => {
      return (tmp.department as string) == "directing";
    });
    casting.push({
      name: getDirector[0].name,
      originalName: getDirector[0].original_name,
      character: "",
      department: "DIRECTOR",
    });

    return {
      cast_members: casting,
    };
  };
  static collectGenres = ({
    tmdbItem,
  }: {
    tmdbItem: tmdbDetail;
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
    switch (name) {
      case "Action":
        return "Accion";
      case "Adventure":
        return "Aventura";
      case "Animation":
        return "Animado";
      case "Comedi":
        return "Comedia";
      case "Crimen":
        return "Crimen";
      case "Documental":
        return "Documental";
      case "Drama":
        return "Drama";
      case "Fantacy":
        return "Fantacia";
      case "Histori":
        return "Historico";
      case "Horror":
        return "Horror";
      case "Music":
        return "Musical";
      case "Mistery":
        return "Misterio";
      case "Love":
        return "Romance";
      case "":
        return "Sci_Fi";
      case "Thriller":
        return "Thriller";
      case "War":
        return "Belica";
      case "West":
        return "Oeste";
      default:
        return "Accion";
    }
  };
  static getEStranslation({
    tmdbId,
    type,
  }: {
    tmdbId: string;
    type: "movie" | "tv";
  }) {
    let translation: tmdbTraslations ={
      id:0,
      translations:[]
    } 
    TmdbServise.Translations({
      tmdbId,
      type,
    }).then(res => {
      translation = res
    });

    const newInfo = translation.translations.filter((element) => {
      element.iso_3166_1 == "ES";
    })[0].data;
    return {
      title: newInfo.title,
      plot: newInfo.overview,
    };
  }
}
