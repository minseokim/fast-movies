import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
  NavBar,
  MovieWidget,
  SelectedMovieList,
  SearchBar,
} from './components';
import { Movie, MovieSearchResult } from './typeDefs/MovieData';
import debounce from 'lodash.debounce';

const API_KEY = `6f2ce34a`;

const fetchMovies = async (searchQuery: string) => {
  const movieResult = await fetch(
    `http://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`
  );
  const movieResultJson = await movieResult.json();
  const {
    Search,
    Error: _Error,
    Response,
  } = movieResultJson as MovieSearchResult;
  if (Response === 'False' && _Error) {
    throw new Error(_Error);
  }
  return Search;
};
export const FastMovies = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedMovieList, setSelectedMovieList] = useState<Movie[]>([]);
  const [movieSearchResult, setMovieSearchResult] = useState<Movie[]>([]);

  const clearErrorMessage = () => setErrorMessage(null);

  const debouncedMovieSearch = debounce((searchQuery: string) => {
    setLoading(true);
    clearErrorMessage();

    if (searchQuery === '') {
      setLoading(false);
      setMovieSearchResult([]);
      return;
    }

    fetchMovies(searchQuery)
      .then((movieList) => {
        setMovieSearchResult(movieList);
        setLoading(false);
      })
      .catch((err: Error) => {
        setLoading(false);
        setMovieSearchResult([]);
        setErrorMessage(err.message);
      });
  }, 1500);
  // TODO : Display sample list of movies on initial load(Maybe a random list, 'I'm feeling lucky' style)

  const handleMovieAdd = (movie: Movie) => {
    if (selectedMovieList.includes(movie)) {
      setErrorMessage(`Movie ${movie.Title} is already added!`);
      return;
    }

    setSelectedMovieList([...selectedMovieList, movie]);
    clearErrorMessage();
  };

  const handleMovieSearch = ({ target }: { target: HTMLInputElement }) => {
    debouncedMovieSearch(target.value);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar selectedMovieCount={selectedMovieList.length} />
        <SearchBar onMovieSearch={handleMovieSearch} />
        <Switch>
          <Route exact path='/'>
            <MovieWidget
              errorMessage={errorMessage}
              loading={loading}
              movieSearchResult={movieSearchResult}
              onMovieAdd={handleMovieAdd}
            />
          </Route>
          <Route exact path='/checkout'>
            <SelectedMovieList selectedMovieList={selectedMovieList} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
