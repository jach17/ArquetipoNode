import { createLogger, transports, format } from "winston";
const { combine, timestamp, prettyPrint } = format;

let winstonTransports = [new transports.Console()];

export const logger = createLogger({
    transports: winstonTransports,
    level:`${process.env.LOGGER_LEVEL}`,
    format: combine(
        format.splat(),
        format.metadata(),
        prettyPrint(),
        timestamp(),
        format.printf(({ timestamp, level, message }) => {    
            return `[${timestamp}] [User-service] -> ${level}: ${message}`;
        })
    ),
});