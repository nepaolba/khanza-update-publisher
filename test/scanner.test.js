import test from "node:test";
import assert from "node:assert/strict";

import scanner from "../src/scanner/index.js";

test("scanner mengembalikan array", async () => {

    const files = await scanner({
        sourceDirectory: process.cwd(),
        ignore: []
    });

    assert.ok(Array.isArray(files));

});
test("scanner menghasilkan metadata file", async () => {

    const files = await scanner({
        sourceDirectory: process.cwd(),
        ignore: []
    });

    assert.ok(files.length > 0);

    const file = files[0];

    assert.ok(file.relativePath);
    assert.ok(file.absolutePath);
    assert.equal(typeof file.size, "number");
    assert.ok(file.lastModified);

});