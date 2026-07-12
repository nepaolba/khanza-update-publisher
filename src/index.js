import loadConfig from "./config/config.js";

try {
    const config = loadConfig();
    console.log("===================================");
    console.log(`Project : ${config.projectName}`);
    console.log(`Version : ${config.version}`);
    console.log(`Source  : ${config.sourceDirectory}`);
    console.log(`Release : ${config.releaseDirectory}`);
    console.log("===================================");
} catch (error) {
    console.error("Error loading config:", error.message);  
    process.exit(1);
}