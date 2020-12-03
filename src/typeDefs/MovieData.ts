export interface Movie {
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
  Poster: string;
}

export interface MovieSearchResult {
  Search: Movie[];
  totalResults: number;
  Response: string;
  Error: string;
}
