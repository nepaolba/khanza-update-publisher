import loadConfig from "./config/config.js";
import scanner from "./scanner/index.js";

async function main() {

    try {

        const config = loadConfig();

        const files = await scanner({
            sourceDirectory: config.sourceDirectory,
            ignore: config.ignore
        });

        console.table(files);

        console.log(`Total file : ${files.length}`);

    } catch (error) {

        console.error(error.message);

        process.exit(1);

    }

}

main();