import 'reflect-metadata';
import { MovieService } from './services/MovieService';
import { Movie } from './entities/Movie';

const condi: any = {
  page: 1,
};

MovieService.find(condi).then(res => {
  console.log(res.count);
});
