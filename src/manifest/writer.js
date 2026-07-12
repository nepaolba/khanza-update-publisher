import fs from "node:fs/promises";
import path from "node:path";

export default async function writeManifest(outputFile, manifest) {

    const directory = path.dirname(outputFile);

    await fs.mkdir(directory, {
        recursive: true
    });

    const json = JSON.stringify(
        manifest,
        null,
        4
    );

    await fs.writeFile(
        outputFile,
        json,
        "utf8"
    );

}