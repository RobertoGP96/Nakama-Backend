export interface DataInfo {
  id: string
  imdb_id: undefined | string | null

  backdrop_path: undefined | string
  poster_path: undefined | string

  imdbRating: undefined | number
  imdbVotes: undefined | number

  Category: undefined | string
  genres: undefined | string[]

  original_language: undefined | string
  origin_country: undefined | string

  title: undefined | string
  title_es: undefined | string
  original_title: undefined | string

  Year: undefined | string
  release_date: undefined | string

  popularity: undefined | number
  spoken_languages: undefined | string

  vote_average: undefined | number
  vote_count: undefined | number

  credits: undefined | null | Credits

  metadata: undefined | null | Metadata

  abstract: undefined | string
}

export interface Credits {
  id: number
  cast: Cast[]
  crew: Cast[]
}

export interface Cast {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: null | string
  cast_id?: number
  character?: string
  credit_id: string
  order?: number
  department?: string
  job?: string
}

export enum Department {
  Directing = 'Directing',
  Production = 'Production',
  Writing = 'Writing',
}

export enum KnownForDepartment {
  Acting = 'Acting',
  Directing = 'Directing',
  Production = 'Production',
}

export interface Genre {
  id: string
}

export interface Metadata {
  capacity: string
  resolution: string
  audio: string
  subtitle: string
  duration: string
  format: string
  codec: string
  fps: string
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}
