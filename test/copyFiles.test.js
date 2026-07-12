import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";

import {
    ensureRelease,
    cleanRelease,
    copyFiles
} from "../src/release/index.js";

test("copyFiles mempertahankan struktur folder", async () => {

    const source = "./test-output/source-copy";
const release = "./test-output/release-copy";

    await fs.mkdir(
        path.join(source, "report"),
        {
            recursive: true
        }
    );

    await fs.writeFile(
        path.join(source, "report", "billing.jasper"),
        "hello"
    );

    await ensureRelease(release);
    await cleanRelease(release);

    await copyFiles(
        [
            {
                absolutePath: path.join(source, "report", "billing.jasper"),
                relativePath: "report/billing.jasper"
            }
        ],
        release
    );

    const stat = await fs.stat(
        path.join(release, "report", "billing.jasper")
    );

    assert.equal(stat.isFile(), true);

    await fs.rm(source, {
        recursive: true,
        force: true
    });

    await fs.rm(release, {
        recursive: true,
        force: true
    });

});

test("copyFiles menyalin beberapa file", async () => {

  const source = "./test-output/source-copy";
const release = "./test-output/release-copy";

    await fs.mkdir(path.join(source, "lib"), { recursive: true });
    await fs.mkdir(path.join(source, "report"), { recursive: true });

    await fs.writeFile(path.join(source, "Khanza.jar"), "jar");
    await fs.writeFile(path.join(source, "lib", "mysql.jar"), "mysql");
    await fs.writeFile(path.join(source, "report", "nota.jasper"), "nota");

    await ensureRelease(release);
    await cleanRelease(release);

    await copyFiles([
        {
            absolutePath: path.join(source, "Khanza.jar"),
            relativePath: "Khanza.jar"
        },
        {
            absolutePath: path.join(source, "lib", "mysql.jar"),
            relativePath: "lib/mysql.jar"
        },
        {
            absolutePath: path.join(source, "report", "nota.jasper"),
            relativePath: "report/nota.jasper"
        }
    ], release);

    await fs.stat(path.join(release, "Khanza.jar"));
    await fs.stat(path.join(release, "lib", "mysql.jar"));
    await fs.stat(path.join(release, "report", "nota.jasper"));

    await fs.rm(source, { recursive: true, force: true });
    await fs.rm(release, { recursive: true, force: true });

});