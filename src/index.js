import app from "./app.js";
import {
    banner,
    getCommand
} from "./cli/index.js";

async function main() {

    banner();

    const command = getCommand();

    switch (command) {

        case "publish":

            await app();

            break;

        case "version":

            console.log("Khanza Update Publisher v1.0.0");

            break;

        default:

            console.log(`Command "${command}" tidak dikenal.`);
            process.exit(1);

    }

}

main().catch(error => {

    console.error(error);

    process.exit(1);

});