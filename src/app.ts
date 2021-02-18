import express from 'express';
import dotenv from 'dotenv';
import 'reflect-metadata';
dotenv.config();

import { router } from './routes';
import './database/database';

const app = express();
app.use(router);

export { app }