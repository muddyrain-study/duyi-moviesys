import { combineReducers } from 'redux';
import movieReducer, { IMovieState } from './MovieReducer';

export interface IRootState {
  movie: IMovieState;
}

export const rootReducer = combineReducers({
  movie: movieReducer,
});