import { error } from "console";
import {
  BigQuery,
  FindByImdbId,
  tmdbAlternativeTitles,
  tmdbCredits,
  tmdbDetail,
  tmdbExternalsIds,
  tmdbImages,
  tmdbResult,
  tmdbSearch,
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
    year
  }: {
    pageParam: number;
    search: string;
    type: string;
    year: string
  }):Promise<tmdbSearch> => {

    return await fetch(
      this.base_url +
        `search/${type}?query=${search}&include_adult=true${year?`&year=${year}`:``}&language=es-ES&page=${pageParam}`,
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
    type: string;
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
    type: string;
  }): Promise<tmdbImages> => {
    return await fetch(this.base_url + `${type}/${tmdbId}/images`, this.options)
      .then((res) => res.json())
      .catch();
  };
  //Translations
  static Translations = ({
    tmdbId,
    type,
  }: {
    tmdbId: string;
    type: "movie" | "tv";
  }): Promise<tmdbTraslations> => {
    return fetch(
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
    type: string;
  }): Promise<tmdbCredits> => {
    return fetch(
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
    type: string;
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
    type: string;
  }): Promise<tmdbDetail> => {
    return await fetch(this.base_url + `${type}/${tmdbId}`, this.options)
      .then((res) => res.json())
      .catch();
  };
  //BigQuery
  static BigQueryES = async ({
    tmdbId,
    type,
    lang
  }: {
    tmdbId: string;
    type: string;
    lang: string
  }): Promise<BigQuery> => {
    return await fetch(this.base_url + `${type}/${tmdbId}?append_to_response=translations%2Cexternalsids%2Cimages%2Ccredits&language=${lang}`, this.options)
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
