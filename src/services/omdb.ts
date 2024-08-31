//const API_KEY_OMDB = "4303a522";

import { omdbElement } from "../types/omdb";

export class OMDBServise {
  static params = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    api_key: "4303a522",
    plot: "full",
    r: "json",
  };
  
  static options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  static getBySearch = async ({ search, year, type }:{ search: string ,year: undefined | string, type: string}) => {
    const yearurl = year? `&y=${year}` : ""
    return await fetch(
      `http://www.omdbapi.com/?apikey=${this.params.api_key}&s=${search}${yearurl}&type=${type}&plot=full&r=json`,
      this.options
    ).then(async (res) => res.json());
  };
  static getByID = async ({ id, year, type  }:{ id: string, year: undefined | string, type: string }): Promise<omdbElement> => {
    const yearurl = year? `&y=${year}` : ""
    return await fetch(
      `http://www.omdbapi.com/?apikey=${this.params.api_key}&i=${id}${yearurl}&type=${type}&plot=full&r=json`,
      this.options
    ).then(async (res) => res.json());
  };
  static getByTitle = async ({ title, year, type }:{ title: string, year: undefined | string, type: string}): Promise<omdbElement> => {
    const yearurl = year? `&y=${year}` : ""
    return await fetch(
      `http://www.omdbapi.com/?apikey=${this.params.api_key}&t=${title}${yearurl}&type=${type}&plot=full&r=json`,
      this.options
    ).then(async (res) => res.json());
  };
}
