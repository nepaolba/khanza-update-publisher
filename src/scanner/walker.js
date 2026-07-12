import fs from "node:fs/promises";
import path from "node:path";

import shouldIgnore from "./ignore.js";

export default async function walk(directory, callback, ignore = []) {

    const entries = await fs.readdir(directory, {
        withFileTypes: true
    });

    for (const entry of entries) {

        if (shouldIgnore(entry.name, ignore)) {
            continue;
        }

        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {

            await walk(fullPath, callback, ignore);

        } else {

            await callback(fullPath);

        }

    }

}