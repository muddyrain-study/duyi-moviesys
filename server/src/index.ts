import { validate } from 'class-validator';
import { Movie } from './entities/Movie';
const m = new Movie();
m.name = 'a';
m.types = ['喜剧'];
validate(m).then(errors => {
  console.log(errors);
});
