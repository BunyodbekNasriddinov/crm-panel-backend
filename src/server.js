// third party packages import
import cors from 'cors';
import 'dotenv/config.js';
import express from 'express';
import morgan from 'morgan';

// core modules import
import { createWriteStream } from 'fs';
import { resolve } from 'path';

// other modules import
import { PORT } from './configs/config.js';
import errorHandler from './middlewares/errorHandler.js';
import multer from './utils/upload.js';

// all routes import
import allRoutes from './routes/all.routes.js';

const app = express();
// middlewares
app.use(multer.any('avatar'));
app.use(cors());
app.use(express.json());
app.use(express.static(resolve('uploads')));

// setup the logger
const accessLogStream = createWriteStream(resolve('access.log'), {
	flags: 'a',
});
app.use(morgan('combined', { stream: accessLogStream }));

// all routes
app.use(allRoutes);

// error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running port: ${PORT}`));
