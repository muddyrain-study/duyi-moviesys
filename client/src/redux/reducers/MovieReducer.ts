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
}

const defaultState: IMovieState = {
  data: [],
  condition: {
    key: '',
    page: 1,
    limit: 10,
  },
  total: 0,
  isLoading: false,
};

const svaeMovie: Reducer<IMovieState, SaveMoviesAction> = (state, action) => {
  return {
    ...state,
    ...{
      data: action.payload.movies,
      total: action.payload.total,
    },
  };
};

const setCondition: Reducer<IMovieState, SetConditionAction> = (
  state,
  action
) => {
  return {
    ...state,
    condition: {
      ...state.condition,
      ...action.payload,
    },
  };
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
  };
};

export default function moveReducer(
  state: IMovieState = defaultState,
  action: MovieActions
) {
  switch (action.type) {
    case 'movie_save':
      break;

    case 'movie_setCondition':
      break;
    case 'movie_delete':
      break;
    case 'movie_set_loading':
      break;

    default:
      break;
  }
}
