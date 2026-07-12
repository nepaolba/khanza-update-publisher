import * as logger from "./logger.js";
import loadPackage from "../system/package.js";

export default function version() {

    const pkg = loadPackage();

    logger.info("");
    logger.info("KHANZA UPDATE PUBLISHER");
    logger.info("");

    logger.info(`Version : ${pkg.version}`);
    logger.info(`Node    : ${process.version}`);
    logger.info(`Platform: ${process.platform}`);
    logger.info("");

}