import fs from "node:fs/promises";

export default async function readManifest(filePath) {

    const json = await fs.readFile(filePath, "utf8");

    return JSON.parse(json);

}