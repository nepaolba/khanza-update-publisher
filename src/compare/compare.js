import manifestMap from "./manifestMap.js";

export default function compare(oldManifest = [], newManifest = []) {

    const oldMap = manifestMap(oldManifest);
    const newMap = manifestMap(newManifest);

    const result = {
        added: [],
        modified: [],
        deleted: [],
        unchanged: []
    };

    // cek file baru / berubah / tetap
    for (const file of newManifest) {

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

    // cek file yang dihapus
    for (const file of oldManifest) {

        if (!newMap.has(file.relativePath)) {
            result.deleted.push(file);
        }

    }

    return result;

}