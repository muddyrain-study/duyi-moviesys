import Express, { Router } from 'express';
import { MovieService } from '../services/MovieService';
import { ResponseHelper } from './ResponseHelper';

const router = Express.Router();

router.get('/:id', async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await MovieService.findById(movieId);
    ResponseHelper.sendData(movie, res);
  } catch (error) {
    ResponseHelper.sendData(null, res);
  }
});

router.post('/', (req, res) => {
  res.send('post 请求');
});

router.put('/', (req, res) => {
  res.send('put  请求');
});

router.delete('/', (req, res) => {
  res.send('delete  请求');
});

export default router;
