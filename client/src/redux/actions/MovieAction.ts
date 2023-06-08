import { ISearchCondition } from '../../services/CommonTypes';
import { IMovie } from '../../services/MovieService';
import { IAction } from './ActionTypes';

export type SaveMoviesAction = IAction<
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

export type SetLoadingAction = IAction<'movie_set_loading', boolean>;
export function setLoadingAction(isLoading: boolean): SetLoadingAction {
  return {
    type: 'movie_set_loading',
    payload: isLoading,
  };
}

export type SetConditionAction = IAction<
  'movie_setCondition',
  ISearchCondition
>;
export function setConditionAction(
  condition: ISearchCondition
): SetConditionAction {
  return {
    type: 'movie_setCondition',
    payload: condition,
  };
}

export type DeleteAction = IAction<'movie_delete', string>;
export function deleteAction(id: string): DeleteAction {
  return {
    type: 'movie_delete',
    payload: id,
  };
}

export type MovieActions =
  | SaveMoviesAction
  | SetLoadingAction
  | SetConditionAction
  | DeleteAction;

const movieActions = {
  saveMoviesAction,
  setLoadingAction,
  setConditionAction,
  deleteAction,
};
export default movieActions;
