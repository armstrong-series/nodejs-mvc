import express from 'express';
import listEndpoints from 'express-list-endpoints';
import routes from '../src/routes'; 
const app = express();

app.use('/api/v1', routes);

const endpoints = listEndpoints(app);
console.log(endpoints);
