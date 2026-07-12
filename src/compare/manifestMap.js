export default function manifestMap(files = []) {

    const map = new Map();

    for (const file of files) {
        map.set(file.relativePath, file);
    }

    return map;

}