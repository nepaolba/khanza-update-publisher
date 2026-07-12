import test from "node:test";
import assert from "node:assert/strict";

import compare from "../src/compare/index.js";

test("compare tanpa perubahan", () => {

    const oldFiles = [
        {
            relativePath: "A.jar",
            sha256: "111"
        }
    ];

    const newFiles = [
        {
            relativePath: "A.jar",
            sha256: "111"
        }
    ];

    const result = compare(oldFiles, newFiles);

    assert.equal(result.unchanged.length, 1);
    assert.equal(result.added.length, 0);
    assert.equal(result.modified.length, 0);
    assert.equal(result.deleted.length, 0);

});