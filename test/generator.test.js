import test from "node:test";
import assert from "node:assert/strict";

import generateHash from "../src/hash/generator.js";

test("generateHash menghasilkan SHA256", async () => {

    const hash = await generateHash("package.json");

    assert.equal(hash.length, 64);

});