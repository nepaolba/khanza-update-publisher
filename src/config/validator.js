import fs from 'fs';
import path from 'path';

export default function validate(config) {
    if (!config.projectName) throw new Error("projectName belum diisi");

    if (!config.version) throw new Error("version belum diisi");

    if (!config.sourceDirectory) throw new Error("sourceDirectory belum diisi");

    if (!fs.existsSync(config.sourceDirectory)) throw new Error("Folder sourceDirectory tidak ditemukan");

    if (!config.releaseDirectory) throw new Error("releaseDirectory belum diisi");

    // Resolve release directory relative to current working directory and create if missing
    const releaseDirPath = path.resolve(process.cwd(), config.releaseDirectory);
    if (!fs.existsSync(releaseDirPath)) {
        try {
            fs.mkdirSync(releaseDirPath, { recursive: true });
        } catch (err) {
            throw new Error(`Gagal membuat releaseDirectory: ${releaseDirPath} - ${err.message}`);
        }
    }

    if (!config.algorithm) throw new Error("algorithm belum diisi");

    const allowed = ["sha256"];
    if (!allowed.includes(config.algorithm)) throw new Error(`algorithm tidak dikenali: ${config.algorithm}`);

    // Store resolved path back to config for use by other modules
    config.releaseDirectory = releaseDirPath;

    return true;
}