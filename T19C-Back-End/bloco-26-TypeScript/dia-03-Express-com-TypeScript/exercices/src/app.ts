/* eslint-disable no-console */
import express from 'express';
import UserRoutes from './routes/user.routes';
import PostRoutes from './routes/post.routes';

const app = express();

app.use(express.json());
app.use('/users', UserRoutes);
app.use('/posts', PostRoutes);

export default app;
