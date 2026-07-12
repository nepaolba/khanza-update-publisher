import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";

import {
    ensureRelease,
    cleanRelease,
    writeVersion
} from "../src/release/index.js";

test("writeVersion membuat version.json", async () => {

   const release = "./test-output/release-version";

    await ensureRelease(release);
    await cleanRelease(release);

    await writeVersion(
        {
            projectName: "SIMRS Khanza",
            version: "1.0.1"
        },
        release
    );

    const json = JSON.parse(
        await fs.readFile(
            path.join(release, "version.json"),
            "utf8"
        )
    );

    assert.equal(json.projectName, "SIMRS Khanza");
    assert.equal(json.version, "1.0.1");
    assert.ok(json.generatedAt);

    await fs.rm(release, {
        recursive: true,
        force: true
    });

});