import * as types from '../../actions/main/types';
import { MoviesStateType, MoviesActionsType } from '../../actions/main/types';

const initialState: MoviesStateType = {
  movies: {
    popular: [],
    topRated: [],
  },
  genres: {},
  loading: false,
  errorMessage: '',
};

export default (state = initialState, action: MoviesActionsType) => {
  switch (action.type) {
    case types.LOAD_REQUEST: {
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };
    }
    case types.LOAD_SUCCESS: {
      return {
        ...state,
        movies: {
          ...state.movies,
          [action.genreName]: [
            //...state.movies[action.field],
            ...(action.payload as []),
          ],
        },
        loading: false,
        errorMessage: '',
      };
    }
    case types.LOAD_MORE_SUCCESS: {
      return {
        ...state,
        movies: {
          ...state.movies,
          [action.genreName]: [
            ...state.movies[action.genreName],
            ...(action.payload as []),
          ],
        },
        loading: false,
      };
    }
    case types.LOAD_ERROR: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    }
    case types.LOAD_GENRE_SUCCESS: {
      return {
        ...state,
        genres: {
          ...state.genres,
          ...action.payload,
        },
        loading: false,
        errorMessage: '',
      };
    }
    default:
      return state;
  }
};
