import { ThunkAction } from './../../../node_modules/redux-thunk/src/types';
import { ISearchCondition } from '../../services/CommonTypes';
import { IMovie, MovieService } from '../../services/MovieService';
import { IAction } from './ActionTypes';
import { IRootState } from '../reducers/rootReducer';

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

// 根据条件从服务器获取电影数据
function fetchMovies(
  condition: ISearchCondition
): ThunkAction<Promise<void>, IRootState, unknown, MovieActions> {
  return async (dispatch, getState) => {
    // 设置加载状态
    dispatch(setLoadingAction(true));

    // 设置条件
    dispatch(setConditionAction(condition));
    const resp = await MovieService.getMovies(condition);

    // 更改仓库数据
    dispatch(saveMoviesAction(resp.data, resp.total));
    // 关闭加载状态
    dispatch(setLoadingAction(false));
  };
}

const movieActions = {
  saveMoviesAction,
  setLoadingAction,
  setConditionAction,
  deleteAction,
  fetchMovies,
};
export default movieActions;
