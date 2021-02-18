import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes';

dotenv.config();
const app = express();
app.use(router);

app.listen(process.env.PORT, () => {
  console.info(`Server running on ${process.env.PORT}`);
})