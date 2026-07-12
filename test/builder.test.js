import test from "node:test";
import assert from "node:assert/strict";

import buildManifest from "../src/manifest/builder.js";

test("builder membuat manifest", () => {

    const manifest = buildManifest("1.0.0", [
        {
            relativePath: "Khanza.jar",
            size: 100,
            lastModified: "2026-07-12T10:00:00.000Z",
            sha256: "abc123"
        }
    ]);

    assert.equal(manifest.version, "1.0.0");
    assert.equal(manifest.files.length, 1);

});