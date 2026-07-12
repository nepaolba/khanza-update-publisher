import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";

import {
    ensureRelease,
    cleanRelease
} from "../src/release/index.js";

test("cleanRelease menghapus seluruh isi folder", async () => {

 const folder = "./test-output/clean-release";

    await ensureRelease(folder);

    await fs.writeFile(
        `${folder}/test.txt`,
        "Hello"
    );

    await fs.mkdir(
        `${folder}/lib`,
        {
            recursive: true
        }
    );

    await fs.writeFile(
        `${folder}/lib/mysql.jar`,
        "jar"
    );

    await cleanRelease(folder);

    const files = await fs.readdir(folder);

    assert.equal(files.length, 0);

    await fs.rm(folder, {
        recursive: true,
        force: true
    });

});