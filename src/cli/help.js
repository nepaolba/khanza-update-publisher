import * as logger from "./logger.js";

export default function help() {

    logger.info("");
    logger.info("Khanza Update Publisher");
    logger.info("");
    logger.info("Penggunaan:");
    logger.info("  node src/index.js <command>");
    logger.info("");
    logger.info("Command:");
    logger.info("  publish    Membuat release update");
    logger.info("  version    Menampilkan versi publisher");
    logger.info("  help       Menampilkan bantuan");
    logger.info("");

}