import loadConfig from "./config/config.js";
import scanner from "./scanner/index.js";
import hash from "./hash/index.js";
import compare from "./compare/index.js";   // <-- tambah
import {buildManifest,writeManifest} from "./manifest/index.js";

async function main() {

    const config = loadConfig();

    const files = await scanner({
        sourceDirectory: config.sourceDirectory,
        ignore: config.ignore
    });

    const hashedFiles = await hash(files);

    // sementara manifest lama masih kosong
   // const oldManifest = [];

    const manifest = buildManifest(config.version,hashedFiles);
    await writeManifest("./release/manifest.json", manifest);

    console.log("Manifest berhasil dibuat.");

    // const compareResult = compare(oldManifest, hashedFiles);

    // console.log("Added     :", compareResult.added.length);
    // console.log("Modified  :", compareResult.modified.length);
    // console.log("Deleted   :", compareResult.deleted.length);
    // console.log("Unchanged :", compareResult.unchanged.length);

   

}

main();