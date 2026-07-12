import test from "node:test";
import assert from "node:assert/strict";

import createCompareResult from "../src/compare/result.js";

test("compare result default", () => {

    const result = createCompareResult();

    assert.equal(result.added.length, 0);
    assert.equal(result.modified.length, 0);
    assert.equal(result.deleted.length, 0);
    assert.equal(result.unchanged.length, 0);

});