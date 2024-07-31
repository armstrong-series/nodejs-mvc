import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';

const { combine, timestamp, printf, colorize } = format;

const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
    level: 'info',
    format: combine(
        colorize(),
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        logFormat
    ),
    transports: [
        new transports.Console(),
        new transports.DailyRotateFile({
            filename: 'logs/application-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
        })
    ],
    exceptionHandlers: [
        new transports.File({ filename: 'logs/exceptions.log' })
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: format.simple()
    }));
}

export default logger;
