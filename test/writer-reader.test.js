import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";

import {
    writeManifest,
    readManifest
} from "../src/manifest/index.js";

test("writer dan reader manifest", async () => {

    const file = "./test-manifest.json";

    const manifest = {
        version: "1.0.0",
        generatedAt: "2026-07-12",
        files: []
    };

    await writeManifest(file, manifest);

    const result = await readManifest(file);

    assert.equal(result.version, "1.0.0");

    await fs.unlink(file);

});