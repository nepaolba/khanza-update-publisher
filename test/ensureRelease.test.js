import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";

import { ensureRelease } from "../src/release/index.js";

test("ensureRelease membuat folder", async () => {

    const folder = "./test-output/ensure-release";

    await ensureRelease(folder);

    const stat = await fs.stat(folder);

    assert.equal(stat.isDirectory(), true);

    await fs.rm(folder, {
        recursive: true,
        force: true
    });

});