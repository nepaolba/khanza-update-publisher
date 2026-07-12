import app from "./app.js";

import {
    banner,
    logger,
    getCommand,
     help, version
} from "./cli/index.js";
import handleError from "./error/handler.js";

async function main() {

    banner();

    const command = getCommand();

    switch (command) {

        case "publish":

            await app();
            break;

        case "version":

    logger.info("Khanza Update Publisher v1.0.0");

    break;

      case "help":

    help();

    break;

       default:

    throw new Error(
        `Command "${command}" tidak dikenali.`
    );
    }

}

main().catch(handleError);