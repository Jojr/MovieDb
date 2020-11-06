import { ThunkAction } from 'redux-thunk';
import * as types from './types';
import { LoadMoviesSuccess, MoviesStateType } from './types';
import * as movieService from '../../../services/mainService';

type ThunkResult<R> = ThunkAction<R, MoviesStateType, undefined, any>;

export const loadMoviesSuccess = (payload: []): LoadMoviesSuccess => ({
  type: types.LOAD_SUCCESS,
  payload,
});

export const loadMoviesRequest = (
  offset: number,
  field: string,
  genreName: string,
): ThunkResult<any> => {
  return (dispatch) => {
    dispatch({ type: types.LOAD_REQUEST });
    movieService
      .popularMovies(offset)
      .then((result: any) => {
        const { data, error } = result;
        if (error) {
          dispatch({ type: types.LOAD_ERROR, payload: error });
        } else {
          if (offset === 1) {
            dispatch({
              type: types.LOAD_SUCCESS,
              payload: data,
              field,
              genreName,
            });
          } else {
            dispatch({
              type: types.LOAD_MORE_SUCCESS,
              payload: data,
              field,
              genreName,
            });
          }
        }
      })
      .catch((error) => {
        if (__DEV__) {
          console.log(error);
        }
        dispatch({ type: types.LOAD_ERROR, payload: error });
      });
  };
};

export const loadMoviesByGenre = (
  offset: number,
  field: string,
  genreName: string,
): ThunkResult<any> => {
  return (dispatch) => {
    dispatch({ type: types.LOAD_REQUEST });
    movieService
      .moviesByGenre(offset, field)
      .then((result: any) => {
        const { data, error } = result;
        if (error) {
          dispatch({ type: types.LOAD_ERROR, payload: error });
        } else {
          if (offset === 1) {
            dispatch({
              type: types.LOAD_SUCCESS,
              payload: data,
              field,
              genreName,
            });
          } else {
            dispatch({
              type: types.LOAD_MORE_SUCCESS,
              payload: data,
              field,
              genreName,
            });
          }
        }
      })
      .catch((error) => {
        if (__DEV__) {
          console.log(error);
        }
        dispatch({ type: types.LOAD_ERROR, payload: error });
      });
  };
};

export const loadMoviesByQuery = (
  offset: number,
  filterByName: string,
): ThunkResult<any> => {
  return (dispatch) => {
    dispatch({ type: types.LOAD_REQUEST });
    movieService
      .movieBySearchQuery(offset, filterByName)
      .then((result: any) => {
        const { data, error } = result;
        if (error) {
          dispatch({ type: types.LOAD_ERROR, payload: error });
        } else {
          if (offset === 0) {
            dispatch({ type: types.LOAD_SUCCESS, payload: data });
          } else {
            dispatch({ type: types.LOAD_MORE_SUCCESS, payload: data });
          }
        }
      })
      .catch((error) => {
        if (__DEV__) {
          console.log(error);
        }
        dispatch({ type: types.LOAD_ERROR, payload: error });
      });
  };
};

export const loadMovieGenres = (): ThunkResult<any> => {
  return (dispatch) => {
    dispatch({ type: types.LOAD_REQUEST });
    movieService
      .getGenres()
      .then((result: any) => {
        const { data, error } = result;
        if (error) {
          dispatch({ type: types.LOAD_ERROR, payload: error });
        } else {
          dispatch({ type: types.LOAD_GENRE_SUCCESS, payload: data });
        }
      })
      .catch((error) => {
        if (__DEV__) {
          console.log(error);
        }
        dispatch({ type: types.LOAD_ERROR, payload: error });
      });
  };
};
