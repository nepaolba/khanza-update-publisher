import test from "node:test";
import assert from "node:assert/strict";

import manifestMap from "../src/compare/manifestMap.js";

test("manifestMap membuat Map", () => {

    const map = manifestMap([
        {
            relativePath: "A.jar",
            sha256: "123"
        }
    ]);

    assert.equal(map.get("A.jar").sha256, "123");

});