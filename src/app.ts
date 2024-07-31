import express from 'express';
import dotenv from 'dotenv';
import mainRouter from './routes';
// import Database from './utils/Database';


dotenv.config();

const app = express();
// Database;

app.use(express.json());

app.use('/api/v1', mainRouter);
app.use('/', (request, response) => {
    response.send("Hello World");
})

export default app;
