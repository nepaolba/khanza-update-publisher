import fs from 'fs';

export default function validate(config) {
    if (!config.projectName) throw new Error("projectName belum diisi");
    if (!config.version)throw new Error("version belum diisi");
    if (!config.sourceDirectory)throw new Error("sourceDirectory belum diisi");
    if (!fs.existsSync(config.sourceDirectory))throw new Error("Folder sourceDirectory tidak ditemukan");
    if (!config.releaseDirectory)throw new Error("releaseDirectory belum diisi");
    if (!config.algorithm)throw new Error("algorithm belum diisi");
    return true;
}