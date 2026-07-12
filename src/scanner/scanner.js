import walk from "./walker.js";
import fileInfo from "./fileInfo.js";

export default async function scanner({
    sourceDirectory,
    ignore = []
}) {

    const files = [];

    await walk(
        sourceDirectory,

        async (absolutePath) => {

            const info = await fileInfo(
                sourceDirectory,
                absolutePath
            );

            files.push(info);

        },

        ignore
    );

    return files;

}