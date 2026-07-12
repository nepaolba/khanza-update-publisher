import loadConfig from "./config/config.js";
import scanner from "./scanner/index.js";
import hash from "./hash/index.js";
import compare from "./compare/index.js";
import {buildManifest, readManifest, writeManifest} from "./manifest/index.js";
import { buildRelease } from "./release/index.js";
async function main() {

    const config = loadConfig();

    const files = await scanner({
        sourceDirectory: config.sourceDirectory,
        ignore: config.ignore
    });

    const hashedFiles = await hash(files);

    // Membuat manifest baru dari hasil scan dan hash
    const newManifest = buildManifest(config.version,hashedFiles );

    // Membaca manifest lama
    const oldManifest = await readManifest("./release/manifest.json");
    let compareResult;

    if (oldManifest === null) {

       console.log("Publish pertama.");

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

    console.log("Added     :", compareResult.added.length);
    console.log("Modified  :", compareResult.modified.length);
    console.log("Deleted   :", compareResult.deleted.length);
    console.log("Unchanged :", compareResult.unchanged.length);

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

    console.log("Manifest berhasil dibuat.");

}

main().catch(error => {
    console.error(error);
    process.exit(1);
});