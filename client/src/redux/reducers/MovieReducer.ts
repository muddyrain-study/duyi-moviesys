import { ISearchCondition } from '../../services/CommonTypes';
import { IMovie } from '../../services/MovieService';

export interface IMovieState {
  data: IMovie[];
  condition: Required<ISearchCondition>;
  total: number;
  isLoading: boolean;
}
