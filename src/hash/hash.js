import generateHash from "./generator.js";

export default async function hash(files) {

    const result = [];

    for (const file of files) {

        const sha256 = await generateHash(
            file.absolutePath
        );

        result.push({
            ...file,
            sha256
        });

    }

    return result;

}