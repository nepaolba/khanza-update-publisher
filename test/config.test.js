import test from "node:test";
import assert from "node:assert/strict";

import loadConfig from "../src/config/config.js";

test("loadConfig mengembalikan object konfigurasi", () => {

    const config = loadConfig();

    assert.equal(typeof config, "object");

});

