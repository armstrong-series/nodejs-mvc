
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from './utils/logger';
import http from 'http';
import cors from 'cors';
import app from './app';

const PORT = process.env.PORT || 8080;

app.use(cors({
    credentials: true
}))

app.use(bodyParser.json());
app.use(compression());
app.use(cookieParser());

const appServer = http.createServer(app);

appServer.listen(PORT, () => {
    console.log('Server is running on port http://localhost:8080');
    logger.info(`Server is running on port ${PORT}`);
})


