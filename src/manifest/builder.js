export default function buildManifest(version, files) {

    return {
        version,
        generatedAt: new Date().toISOString(),
        files: files.map(file => ({
            relativePath: file.relativePath,
            size: file.size,
            lastModified: file.lastModified,
            sha256: file.sha256
        }))
    };

}