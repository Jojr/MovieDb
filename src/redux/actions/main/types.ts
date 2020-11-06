import { Action } from 'redux';
import { RootState } from '../../reducers';

export const LOAD_REQUEST = 'movies/LOAD_REQUEST';
export const LOAD_SUCCESS = 'movies/LOAD_SUCCESS';
export const LOAD_MORE_SUCCESS = 'movies/LOAD_MORE_SUCCESS';
export const LOAD_GENRE_SUCCESS = 'movies/LOAD_GENRE_SUCCESS';
export const LOAD_ERROR = 'movies/LOAD_ERROR';

export interface Movie {
  movies: unknown;
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: Array<any>;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export interface MoviesState {
  state: RootState;
  movies: object;
}

export interface Image {
  path: string;
  extension: string;
}

export interface LoadingState {
  movies: boolean;
}

export interface MoviesStateType {
  loading: boolean;
  movies: Array<Movie> | object | any;
  genres: object;
  errorMessage: string;
}

export interface LoadMoviesRequest extends Action {
  type: 'movies/LOAD_REQUEST';
  payload: number;
}

export interface LoadMoviesSuccess extends Action {
  type: 'movies/LOAD_SUCCESS';
  payload: Array<Movie> | number | string;
  field?: any;
  genreName?: any;
}

export interface LoadMoreMoviesSuccess extends Action {
  type: 'movies/LOAD_MORE_SUCCESS';
  payload: Array<Movie> | number | string;
  field?: any;
  genreName?: any;
}

export interface LoadMoviesResult {
  error?: string | null;
  data?: Array<Movie>;
  payload: Array<Movie> | number | string | object;
  type?: Array<Movie> | string | null;
  field?: string;
  genreName?: AsyncGenerator;
}

export interface LoadGenresResult {
  error?: string | null;
  data?: Array<Movie>;
  payload: object;
  type?: Array<Movie> | string | null;
  field?: string;
  genreName?: any;
}

export interface LoadMoviesError extends Action {
  type: 'movies/LOAD_ERROR';
  payload: Array<Movie> | number | string;
}

export type MoviesActionsType =
  | LoadMoviesRequest
  | LoadMoviesSuccess
  | LoadMoreMoviesSuccess
  | LoadMoviesResult
  | LoadGenresResult
  | LoadMoviesError;
