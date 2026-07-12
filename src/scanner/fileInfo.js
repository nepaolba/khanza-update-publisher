import fs from "node:fs/promises";
import path from "node:path";

export default async function fileInfo(rootDirectory, absolutePath) {

    const stat = await fs.stat(absolutePath);

    return {
        relativePath: path.relative(rootDirectory, absolutePath),
        absolutePath,
        size: stat.size,
        lastModified: stat.mtime.toISOString()
    };

}