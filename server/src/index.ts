import 'reflect-metadata';
import Express from 'express';
import MovieRouter from './routes/MovieRoute';

const app = Express();

// 配置解析中间件 用于解析请求体 body 里的格式数据
app.use(Express.json());

app.use('/api/movie', MovieRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
