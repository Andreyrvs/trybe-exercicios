/* eslint-disable no-console */
import express from 'express';
import UserRoutes from './routes/user.routes';
import PostRoutes from './routes/post.routes';
import ProductRoutes from './routes/product.routes';

const app = express();

app.use(express.json());
app.use('/users', UserRoutes);
app.use('/posts', PostRoutes);
app.use('/products', ProductRoutes);

export default app;
