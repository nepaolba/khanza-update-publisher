import loadConfig from "./config/config.js";
import scanner from "./scanner/index.js";
import hash from "./hash/index.js";
import compare from "./compare/index.js";
import {buildManifest,readManifest,writeManifest} from "./manifest/index.js";
import { logger } from "./cli/index.js";
import {buildRelease} from "./release/index.js";

export default async function app() {

    const config = loadConfig();

    const files = await scanner({
        sourceDirectory: config.sourceDirectory,
        ignore: config.ignore
    });

    const hashedFiles = await hash(files);

    const newManifest = buildManifest(
        config.version,
        hashedFiles
    );

    const oldManifest = await readManifest("./release/manifest.json");

    let compareResult;

    if (oldManifest === null) {

        compareResult = {
            added: newManifest.files,
            modified: [],
            deleted: [],
            unchanged: []
        };

    } else {

        compareResult = compare(
            oldManifest.files,
            newManifest.files
        );

       logger.info(`Added     : ${compareResult.added.length}`);
logger.info(`Modified  : ${compareResult.modified.length}`);
logger.info(`Deleted   : ${compareResult.deleted.length}`);
logger.info(`Unchanged : ${compareResult.unchanged.length}`);

    }

    await buildRelease({
        config,
        compareResult,
        releaseDirectory: "./release"
    });

    await writeManifest(
        "./release/manifest.json",
        newManifest
    );

   logger.success("Manifest berhasil dibuat.");

}