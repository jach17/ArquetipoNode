import { createLogger, transports, format } from "winston";
const { combine, timestamp, prettyPrint } = format;
import config from '../../config/env';

let winstonTransports = [new transports.Console()];

export const logger = createLogger({
    transports: winstonTransports,
    level: `info`,
    format: combine(
        format.splat(),
        format.metadata(),
        prettyPrint(),
        timestamp(),
        format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] [user-service] -> ${level}: ${message}`;
        })
    ),
});