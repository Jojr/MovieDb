import { combineReducers } from 'redux';

import main from './main';
import favorites from './favorites';

export const rootReducer = combineReducers({
  main,
  favorites,
});

export type RootState = ReturnType<typeof rootReducer>;
