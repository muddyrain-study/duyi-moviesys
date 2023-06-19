import { Reducer } from 'react';
import { ISearchCondition } from '../../services/CommonTypes';
import { IMovie } from '../../services/MovieService';
import {
  DeleteAction,
  MovieActions,
  SaveMoviesAction,
  SetConditionAction,
  SetLoadingAction,
} from '../actions/MovieAction';

export interface IMovieState {
  data: IMovie[];
  condition: Required<ISearchCondition>;
  total: number;
  isLoading: boolean;
  totalPage: number;
}

const defaultState: IMovieState = {
  data: [],
  condition: {
    key: '',
    page: 1,
    limit: 10,
  },
  total: 0,
  totalPage: 0,
  isLoading: false,
};

const saveMovie: Reducer<IMovieState, SaveMoviesAction> = (state, action) => {
  return {
    ...state,
    ...{
      data: action.payload.movies,
      total: action.payload.total,
      totalPage: Math.ceil(action.payload.total / state.condition.limit),
    },
  };
};

const setCondition: Reducer<IMovieState, SetConditionAction> = (
  state,
  action
) => {
  const newState = {
    ...state,
    condition: {
      ...state.condition,
      ...action.payload,
    },
  };
  newState.totalPage = Math.ceil(newState.total / newState.condition.limit);
  return newState;
};

const setLoading: Reducer<IMovieState, SetLoadingAction> = (state, action) => {
  return {
    ...state,
    isLoading: action.payload,
  };
};

const deleteMovie: Reducer<IMovieState, DeleteAction> = (state, action) => {
  return {
    ...state,
    data: state.data.filter(movie => movie._id !== action.payload),
    total: state.total - 1,
    totalPage: Math.ceil(state.total - 1 / state.condition.limit),
  };
};

export default function moveReducer(
  state: IMovieState = defaultState,
  action: MovieActions
) {
  switch (action.type) {
    case 'movie_save':
      return saveMovie(state, action);
    case 'movie_setCondition':
      return setCondition(state, action);
    case 'movie_delete':
      return deleteMovie(state, action);
    case 'movie_set_loading':
      return setLoading(state, action);
    default:
      return state;
  }
}
