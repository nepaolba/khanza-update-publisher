import test from "node:test";
import assert from "node:assert/strict";

import scanner from "../src/scanner/index.js";
import hash from "../src/hash/index.js";

test("hash menambahkan field sha256", async () => {

    const files = await scanner({
        sourceDirectory: process.cwd(),
        ignore: []
    });

    const result = await hash(files);

    if (result.length > 0) {

        assert.ok(result[0].sha256);

        assert.equal(
            result[0].sha256.length,
            64
        );

    }

});