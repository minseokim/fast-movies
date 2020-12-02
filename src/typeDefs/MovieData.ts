export interface Movie {
  Title: string;
  Type: string;
  imdbRating: string;
  imdbID: string;
  Poster: string;
  Rated: string;
  Director: string;
  Genre: string;
}

export interface MovieSearchResult {
  Search: Movie[];
  totalResults: number;
  Response: String;
}
