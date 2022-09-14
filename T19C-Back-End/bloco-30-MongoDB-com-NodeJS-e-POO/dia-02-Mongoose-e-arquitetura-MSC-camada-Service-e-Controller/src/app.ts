import express from 'express';
import 'express-async-errors';
import errorHanlder from './middlewares/error';
import frameRouter from './routes/frame';

const app = express();
app.use(express.json());
app.use(frameRouter);
app.use(errorHanlder);

export default app;