import { error } from "console";
import {
  FindByImdbId,
  tmdbAlternativeTitles,
  tmdbCredits,
  tmdbExternalsIds,
  tmdbImages,
  tmdbTraslations,
} from "../types/tmdb";

//+Image * +ExternalIds * +Search +Traslations * +Credits* +Alternatives Titles * +Details
export class TmdbServise {
  static base_url = "https://api.themoviedb.org/3/";
  static options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.TMDB_TOKEN as string,
    },
  };
  //Search
 static Search = async ({
    pageParam,
    search,
    type,
  }: {
    pageParam: number;
    search: string;
    type: "movie" | "tv";
  }) => {
    return await fetch(
      this.base_url +
        `search/${type}?query=${search}&include_adult=false&page=${pageParam}`,
      this.options
    ).then(async (res) => {
      return await res.json();
    });
  };

  //Find by ID
  static FindByImdbId = async ({
    imdbId,
  }: {
    imdbId: string;
  }): Promise<FindByImdbId> => {
    return await fetch(
      this.base_url + `find/${imdbId}?external_source=imdb_id`,
      this.options
    ).then(async (res) => {
      return await res.json();
    });
  };
  //ExternalsIds
  static ExternalsIds = async ({
    tmdbId,
    type,
  }: {
    tmdbId: string;
    type: "movie" | "tv";
  }): Promise<tmdbExternalsIds> => {
    return await fetch(
      this.base_url + `${type}/${tmdbId}/external_ids`,
      this.options
    )
      .then((res) => res.json())
      .catch();
  };
  //Images
  static Images = async ({
    tmdbId,
    type,
  }: {
    tmdbId: string;
    type: "movie" | "tv";
  }): Promise<tmdbImages> => {
    return await fetch(this.base_url + `${type}/${tmdbId}/images`, this.options)
      .then((res) => res.json())
      .catch();
  };
  //Translations
  static Translations = async ({
    tmdbId,
    type,
  }: {
    tmdbId: string;
    type: "movie" | "tv";
  }): Promise<tmdbTraslations> => {
    return await fetch(
      this.base_url + `${type}/${tmdbId}/translations`,
      this.options
    )
      .then((res) => res.json())
      .catch();
  };
  //Credits
  static Credits = async ({
    tmdbId,
    type,
  }: {
    tmdbId: string;
    type: "movie" | "tv";
  }): Promise<tmdbCredits> => {
    return await fetch(
      this.base_url + `${type}/${tmdbId}/credits`,
      this.options
    )
      .then((res) => res.json())
      .catch();
  };
  //AlternativesTitle
  static AlternativesTitle = async ({
    tmdbId,
    type,
  }: {
    tmdbId: string;
    type: "movie" | "tv";
  }): Promise<tmdbAlternativeTitles> => {
    return await fetch(
      this.base_url + `${type}/${tmdbId}/alternative_titles`,
      this.options
    )
      .then((res) => res.json())
      .catch();
  };
  //Details
  static Details = async ({
    tmdbId,
    type,
  }: {
    tmdbId: string;
    type: "movie" | "tv";
  }): Promise<tmdbImages> => {
    return await fetch(this.base_url + `${type}/${tmdbId}`, this.options)
      .then((res) => res.json())
      .catch();
  };

  //LISTs
  static Upcomming = async () => {
    return await fetch(this.base_url + "movie/upcoming", this.options).then(
      async (res) => {
        return await res.json();
      }
    ); 
  };

  static Popular = async () => {
    return await fetch(this.base_url + "movie/popular", this.options).then(
      async (res) => {
        return await res.json();
      }
    );
  };

  static NowPlaying = async () => {
    return await fetch(this.base_url + "movie/now_playing", this.options).then(
      async (res) => {
        return await res.json();
      }
    );
  };
}
