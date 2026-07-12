import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";

import {
    ensureRelease,
    cleanRelease,
    writeDeleted
} from "../src/release/index.js";

test("writeDeleted membuat deleted.json", async () => {

  const release = "./test-output/release-deleted";
    await ensureRelease(release);
    await cleanRelease(release);

    await writeDeleted(
        [
            {
                relativePath: "report/old.jasper"
            },
            {
                relativePath: "lib/test.jar"
            }
        ],
        release
    );

    const json = JSON.parse(
        await fs.readFile(
            path.join(release, "deleted.json"),
            "utf8"
        )
    );

    assert.equal(json.length, 2);
    assert.equal(json[0], "report/old.jasper");
    assert.equal(json[1], "lib/test.jar");

    await fs.rm(release, {
        recursive: true,
        force: true
    });

});