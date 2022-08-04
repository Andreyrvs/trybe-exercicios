/* eslint-disable no-console */
import express from 'express';
import UserRoutes from './routes/user.routes';

const app = express();

app.use(express.json());
app.use('/users', UserRoutes);

export default app;
