import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";

import { buildRelease } from "../src/release/index.js";

test("buildRelease membuat paket release", async () => {

    const source = "./test-output/source-build";
const release = "./test-output/release-build";
    await fs.mkdir(source, { recursive: true });
    await fs.mkdir(release, { recursive: true });

    await fs.writeFile(
        path.join(source, "Khanza.jar"),
        "jar"
    );

    await buildRelease({

        config: {
            projectName: "SIMRS Khanza",
            version: "1.0.1"
        },

        releaseDirectory: release,

        compareResult: {

            added: [
                {
                    absolutePath: path.join(source, "Khanza.jar"),
                    relativePath: "Khanza.jar"
                }
            ],

            modified: [],

            deleted: [
                {
                    relativePath: "old.jar"
                }
            ],

            unchanged: []

        }

    });

    await fs.stat(
        path.join(release, "Khanza.jar")
    );

    await fs.stat(
        path.join(release, "deleted.json")
    );

    await fs.stat(
        path.join(release, "version.json")
    );

    await fs.rm(source, {
        recursive: true,
        force: true
    });

    await fs.rm(release, {
        recursive: true,
        force: true
    });

    assert.ok(true);

});