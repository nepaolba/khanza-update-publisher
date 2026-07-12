import manifestMap from "./manifestMap.js";
import createCompareResult from "./result.js";

export default function compare(oldFiles = [], newFiles = []) {

    const result = createCompareResult();

    const oldMap = manifestMap(oldFiles);
    const newMap = manifestMap(newFiles);

    // cek file baru / berubah / tetap
    for (const file of newFiles) {

        const oldFile = oldMap.get(file.relativePath);

        if (!oldFile) {

            result.added.push(file);
            continue;

        }

        if (oldFile.sha256 === file.sha256) {

            result.unchanged.push(file);

        } else {

            result.modified.push(file);

        }

    }

    // cek file dihapus
    for (const file of oldFiles) {

        if (!newMap.has(file.relativePath)) {

            result.deleted.push(file);

        }

    }

    return result;

}