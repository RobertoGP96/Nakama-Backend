//const API_KEY_OMDB = "4303a522";

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

  static getBySearch = async ({ search, year, type }:{ search: string ,year: undefined | string, type: 'movie' | 'series'}) => {
    const yearurl = year? `&y=${year}` : ""
    return await fetch(
      `http://www.omdbapi.com/?apikey=${this.params.api_key}&s=${search}${yearurl}&type=${type}&plot=${this.params.plot}&r=${this.params.r}`,
      this.options
    ).then(async (res) => {
      return await res.json();
    });
  };
  static getByID = async ({ id, year, type  }:{ id: string, year: undefined | string, type: 'movie' | 'series' }) => {
    const yearurl = year? `&y=${year}` : ""
    return await fetch(
      `http://www.omdbapi.com/?apikey=${this.params.api_key}&i=${id}${yearurl}&type=${type}&plot=${this.params.plot}&r=${this.params.r}`,
      this.options
    ).then(async (res) => {
      return await res.json();
    });
  };
  static getByTitle = async ({ title, year, type }:{ title: string, year: undefined | string, type: 'movie' | 'series'}) => {
    const yearurl = year? `&y=${year}` : ""
    return await fetch(
      `http://www.omdbapi.com/?apikey=${this.params.api_key}&t=${title}${yearurl}&type=${type}&plot=${this.params.plot}&r=${this.params.r}`,
      this.options
    ).then(async (res) => {
      return await res.json();
    });
  };
}
