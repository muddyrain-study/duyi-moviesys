import { IMovie } from '../../services/MovieService';
import { IAction } from './ActionTypes';

type SaveMoviesAction = IAction<
  'movie_save',
  {
    movies: IMovie[];
    total: number;
  }
>;

export function saveMoviesAction(
  movies: IMovie[],
  total: number
): SaveMoviesAction {
  return {
    type: 'movie_save',
    payload: {
      movies,
      total,
    },
  };
}

type SetLoadingAction = IAction<'movie_set_loading', boolean>;
export function setLoading(isLoading: boolean): SetLoadingAction {
  return {
    type: 'movie_set_loading',
    payload: isLoading,
  };
}
