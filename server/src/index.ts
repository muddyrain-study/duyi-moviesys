import 'reflect-metadata';
import { MovieService } from './services/MovieService';
import { Movie } from './entities/Movie';

const m: any = {
  name: 'sdf',
  poster: 'sdf',
  description: 'ASdasda',
  timeLong: 33,
  areas: ['sdf'],
  types: ['sdf'],
  isClassic: true,
  isComing: true,
  isHot: true,
};

// MovieService.add(m).then(result => {
//   if (Array.isArray(result)) {
//     console.log(result);
//   } else {
//     console.log(result.id);
//   }
// });

// MovieService.edit('646d79721399ec1a6a47fffb', {
//   name: '疯狂的石头',
//   isHot: false,
// } as any).then(res => {
//   console.log(res);
// });

MovieService.findById('646d7940fd7325419a659ca0').then(res => {});
