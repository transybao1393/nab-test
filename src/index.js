import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import CORS from 'cors';

import bodyParser from 'body-parser';
import helmet from 'helmet';
import Connection from './db/connect';
import productRouter from './router/product';
import {
    trackingActivities
} from './services/userInfo';

try {
    Connection.connectAndGenerateMockData();
} catch (error) {
    console.log('mongoose error', error);
}
const app = express();

//- using morgan
app.use(morgan(':status [:method] :url - :response-time ms'));

//- body-parser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//- using compression
app.use(compression());

//- using CORS for all request
app.use(CORS());

//- using helmet
app.use(helmet());

//- general middleware to handle user device, browser and ip
app.use(function (req, res, next) {
    trackingActivities(req);
    next();
});

//- product router
app.use('/product', productRouter);
export default app;
