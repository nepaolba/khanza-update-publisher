import loadConfig from "./config/config.js";
import scanner from "./scanner/index.js";
import hash from "./hash/index.js";

async function main() {

    try {

        const config = loadConfig();

        const files = await scanner({
            sourceDirectory: config.sourceDirectory,
            ignore: config.ignore
        });

        const hashed = await hash(files);

        console.table(
            hashed.map(file => ({
                file: file.relativePath,
                sha256: file.sha256.substring(0, 16) + "..."
            }))
        );

        console.log(`Total file : ${hashed.length}`);

    } catch (error) {

        console.error(error.message);

        process.exit(1);

    }

}

main();