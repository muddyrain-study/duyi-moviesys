import 'reflect-metadata';
import Express from 'express';

const app = Express();

app.use('/api/movie', (req, res) => {
  res.send('hello');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
