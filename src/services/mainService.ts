import Api from './api';
import { LoadMoviesResult } from '../redux/actions/main/types';
import { publicKey } from '../utils/constants';

export async function movieBySearchQuery(
  offset: Number,
  filterByName: String,
): Promise<LoadMoviesResult> {
  const result: LoadMoviesResult = {
    error: null,
    data: [],
    payload: [],
    type: null,
  };
  await Api.get(
    `/search/movie?api_key=${publicKey}&language=pt-BR&page=${offset}&query=${filterByName}`,
  )
    .then((response) => {
      const { data } = response;
      result.data = data.results;
      if (__DEV__) {
        console.log(result.data);
      }
    })
    .catch((error) => {
      if (__DEV__) {
        console.log(error.response);
      }
      result.error = error.message;
    });

  return result;
}

export async function topRatedMovies(
  offset: Number,
): Promise<LoadMoviesResult> {
  const result: LoadMoviesResult = {
    error: null,
    data: [],
    payload: [],
    type: null,
  };
  await Api.get(
    `/movie/top_rated?api_key=${publicKey}&language=pt-BR&page=${offset}`,
  )
    .then((response) => {
      const { data } = response;
      result.data = data.results;
      if (__DEV__) {
        console.log(result.data);
      }
    })
    .catch((error) => {
      if (__DEV__) {
        console.log(error.response);
      }
      result.error = error.message;
    });

  return result;
}

export async function popularMovies(offset: Number): Promise<LoadMoviesResult> {
  const result: LoadMoviesResult = {
    error: null,
    data: [],
    payload: [],
    type: null,
  };
  await Api.get(
    `/trending/movie/day?api_key=${publicKey}&language=pt-BR&page=${offset}`,
  )
    .then((response) => {
      const { data } = response;
      result.data = data.results;
      if (__DEV__) {
        console.log(result.data);
      }
    })
    .catch((error) => {
      if (__DEV__) {
        console.log(error.response);
      }
      result.error = error.message;
    });

  return result;
}

export async function moviesByGenre(
  offset: Number,
  genre: string,
): Promise<LoadMoviesResult> {
  const result: LoadMoviesResult = {
    error: null,
    data: [],
    payload: [],
    type: null,
  };
  await Api.get(
    `discover/movie?api_key=${publicKey}&language=pt-BR&page=${offset}&with_genres=${genre}`,
  )
    .then((response) => {
      const { data } = response;
      result.data = data.results;
      if (__DEV__) {
        console.log(result.data);
      }
    })
    .catch((error) => {
      if (__DEV__) {
        console.log(error.response);
      }
      result.error = error.message;
    });

  return result;
}

export async function getGenres(): Promise<LoadMoviesResult> {
  const result: LoadMoviesResult = {
    error: null,
    data: [],
    payload: [],
    type: null,
  };
  await Api.get(`/genre/movie/list?api_key=${publicKey}&language=pt-BR`)
    .then((response) => {
      const { genres } = response.data;
      result.data = genres;
      if (__DEV__) {
        console.log(result.data);
      }
    })
    .catch((error) => {
      if (__DEV__) {
        console.log(error.response);
      }
      result.error = error.message;
    });

  return result;
}
