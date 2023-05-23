import 'reflect-metadata';

import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { Movie } from './entities/Movie';
const m: any = {};
m.name = 'a1';
m.types = ['喜剧'];
m.areas = ['中国大陆'];
m.timeLong = 2;

const movie = plainToClass(Movie, m as Object);
validate(movie).then(errors => {
  console.log(errors);
});

console.log(movie, typeof movie.name);
