import { error } from "console";
import axios, { AxiosResponse } from "axios";
import {
  BigQuery,
  FindByImdbId,
  tmdbAlternativeTitles,
  tmdbCredits,
  tmdbDetail,
  tmdbExternalsIds,
  tmdbImages,
  tmdbTraslations,
} from "../types/tmdb";

export class TmdbServise {
  static base_url = "https://api.themoviedb.org/3/";
  static options = {
    headers: {
      accept: "application/json",
      Authorization: process.env.TMDB_TOKEN as string,
    },
  };

  // Search
  static Search = async ({
    pageParam,
    search,
    type,
  }: {
    pageParam: number;
    search: string;
    type: string;
  }): Promise<any> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.base_url}search/${type}?query=${search}&include_adult=false&page=${pageParam}`,
        this.options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Find by ID
  static FindByImdbId = async ({
    imdbId,
  }: {
    imdbId: string;
  }): Promise<FindByImdbId> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.base_url}find/${imdbId}?external_source=imdb_id`,
        this.options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // ExternalsIds
  static ExternalsIds = async ({
    tmdbId,
    type,
  }: {
    tmdbId: string;
    type: string;
  }): Promise<tmdbExternalsIds> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.base_url}${type}/${tmdbId}/external_ids`,
        this.options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Images
  static Images = async ({
    tmdbId,
    type,
  }: {
    tmdbId: string;
    type: string;
  }): Promise<tmdbImages> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.base_url}${type}/${tmdbId}/images`,
        this.options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Translations
  static Translations = async ({
    tmdbId,
    type,
  }: {
    tmdbId: string;
    type: "movie" | "tv";
  }): Promise<tmdbTraslations> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.base_url}${type}/${tmdbId}/translations`,
        this.options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Credits
  static Credits = async ({
    tmdbId,
    type,
  }: {
    tmdbId: string;
    type: string;
  }): Promise<tmdbCredits> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.base_url}${type}/${tmdbId}/credits`,
        this.options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // AlternativesTitle
  static AlternativesTitle = async ({
    tmdbId,
    type,
  }: {
    tmdbId: string;
    type: string;
  }): Promise<tmdbAlternativeTitles> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.base_url}${type}/${tmdbId}/alternative_titles`,
        this.options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Details
  static Details = async ({
    tmdbId,
    type,
  }: {
    tmdbId: string;
    type: string;
  }): Promise<tmdbDetail> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.base_url}${type}/${tmdbId}`,
        this.options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // BigQuery
  static BigQueryES = async ({
    tmdbId,
    type,
    lang,
  }: {
    tmdbId: string;
    type: string;
    lang: string;
  }): Promise<BigQuery> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.base_url}${type}/${tmdbId}?append_to_response=translations%2Cexternalsids%2Cimages%2Ccredits&language=${lang}`,
        this.options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Lists
  static Upcomming = async (type: string): Promise<any> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.base_url}${type}/upcoming`,
        this.options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  static Popular = async (type: string): Promise<any> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.base_url}${type}/popular`,
        this.options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  static NowPlaying = async (type: string): Promise<any> => {
    try {
      const response: AxiosResponse = await axios.get(
        `${this.base_url}${type}/now_playing`,
        this.options
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
}
