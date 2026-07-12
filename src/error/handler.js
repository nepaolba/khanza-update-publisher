import * as logger from "../cli/logger.js";

export default function handleError(error) {

    if (error instanceof Error) {
        logger.error(error.message);
    } else {
        logger.error(String(error));
    }

    process.exitCode = 1;

}