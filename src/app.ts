import 'reflect-metadata';
import express, { Application, ErrorRequestHandler } from 'express';
import { allRoutes } from './routes/routes';
import { connectDB } from './database/connect';
import { errorHandler } from './shared/middlewares/errorHandler';

const app: Application = express();

connectDB(app);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/v1', allRoutes());

app.use(errorHandler as ErrorRequestHandler)
