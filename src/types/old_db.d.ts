export type oldElement = {
    original_title: string;
    title_es:       string;
    genres_es:      string;
    plot_es:        string;
    omdbDB:         OmdbDB;
    updatedAt:      Date;
    popularity:     number;
}

export type OmdbDB = {
    imdbID:      string;
    Title:       string;
    Year:        string;
    poster_path: string;
    imdbRating:  string;
    imdbVotes:   string;
    Type:        string;
    createdAt:   Date;
}