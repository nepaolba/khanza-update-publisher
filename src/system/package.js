import fs from "node:fs";
import path from "node:path";

export default function loadPackage() {

    const packagePath = path.join(
        process.cwd(),
        "package.json"
    );

    const content = fs.readFileSync(
        packagePath,
        "utf8"
    );

    return JSON.parse(content);

}