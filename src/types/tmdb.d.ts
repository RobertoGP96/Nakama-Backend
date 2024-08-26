export type tmdbDetail = {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: BelongsToCollection;
    budget:                number;
    genres:                Genre[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    origin_country:        string[];
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  ProductionCompany[];
    production_countries:  ProductionCountry[];
    release_date:          string;
    revenue:               number;
    runtime:               number;
    spoken_languages:      SpokenLanguage[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export type BelongsToCollection = {
    id:            number;
    name:          string;
    poster_path:   string;
    backdrop_path: string;
}

export type Genre = {
    id:   number;
    name: string;
}

export type ProductionCompany = {
    id:             number;
    logo_path:      null | string;
    name:           string;
    origin_country: string;
}

export type ProductionCountry = {
    iso_3166_1: string;
    name:       string;
}

export type SpokenLanguage = {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}


export type tmdbList = {
    page:          number;
    results:       tmdbResult[];
    total_pages:   number;
    total_results: number;
}

export type tmdbResult = {
    backdrop_path:     string;
    id:                number;
    title:             string;
    original_title:    string;
    overview:          string;
    poster_path:       string;
    media_type:        string;
    adult:             boolean;
    original_language: string;
    genre_ids:         number[];
    popularity:        number;
    release_date:      Date;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export type tmdbExternalsIds = {
    id:           number;
    imdb_id:      string;
    wikidata_id:  string;
    facebook_id:  null;
    instagram_id: null;
    twitter_id:   null;
}

export type tmdbAlternativeTitles = {
    id:     number;
    titles: alternTitle[];
}

export type alternTitle = {
    iso_3166_1: string;
    title:      string;
    type:       string;
}

export type tmdbCredits = {
    tmdbCredits: any;
    id:   number;
    cast: Cast[];
    crew: Cast[];
}

export type Cast = {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for_department: Department;
    name:                 string;
    original_name:        string;
    popularity:           number;
    profile_path:         null | string;
    cast_id?:             number;
    character?:           string;
    credit_id:            string;
    order?:               number;
    department?:          Department;
    job?:                 string;
}

export enum Department {
    Acting = "Acting",
    Art = "Art",
    Camera = "Camera",
    CostumeMakeUp = "Costume & Make-Up",
    Crew = "Crew",
    Directing = "Directing",
    Editing = "Editing",
    Lighting = "Lighting",
    Production = "Production",
    Sound = "Sound",
    VisualEffects = "Visual Effects",
    Writing = "Writing",
}

export type tmdbImages = {
    backdrops: Backdrop[];
    id:        number;
    logos:     Backdrop[];
    posters:   Backdrop[];
}

export type Backdrop = {
    aspect_ratio: number;
    height:       number;
    iso_639_1:    null | string;
    file_path:    string;
    vote_average: number;
    vote_count:   number;
    width:        number;
}


export type tmdbTraslations = {
    id:           number;
    translations: Translation[];
}

export type Translation = {
    iso_3166_1:   string;
    iso_639_1:    string;
    name:         string;
    english_name: string;
    data:         Data;
}

export type Data = {
    homepage: string;
    overview: string;
    runtime:  number;
    tagline:  string;
    title:    string;
}

export type FindByImdbId = {
    movie_results:      MovieResult[];
    person_results:     any[];
    tv_results:         TvResult[];
    tv_episode_results: any[];
    tv_season_results:  any[];
}

export type MovieResult = {
    backdrop_path:     string;
    id:                number;
    title:             string;
    original_title:    string;
    overview:          string;
    poster_path:       string;
    media_type:        string;
    adult:             boolean;
    original_language: string;
    genre_ids:         number[];
    popularity:        number;
    release_date:      Date;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export type TvResult = {
    backdrop_path:     string;
    id:                number;
    name:              string;
    original_name:     string;
    overview:          string;
    poster_path:       string;
    media_type:        string;
    adult:             boolean;
    original_language: string;
    genre_ids:         number[];
    popularity:        number;
    first_air_date:    Date;
    vote_average:      number;
    vote_count:        number;
    origin_country:    string[];
}