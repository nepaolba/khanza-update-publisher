import test from "node:test";
import assert from "node:assert/strict";

import validate from "../src/config/validator.js";

test("validator menerima konfigurasi yang valid", () => {

    const config = {
        projectName: "SIMRS Khanza",
        version: "1.0.0",
        sourceDirectory: process.cwd(),
        releaseDirectory: "./release",
        algorithm: "sha256"
    };

    assert.equal(validate(config), true);

});

test("projectName wajib diisi", () => {

    const config = {
        version: "1.0.0",
        sourceDirectory: process.cwd(),
        releaseDirectory: "./release",
        algorithm: "sha256"
    };

    assert.throws(
        () => validate(config),
        /projectName/
    );

});
test("version wajib diisi", () => {

    const config = {
        projectName: "SIMRS Khanza",
        sourceDirectory: process.cwd(),
        releaseDirectory: "./release",
        algorithm: "sha256"
    };

    assert.throws(
        () => validate(config),
        /version/
    );

});