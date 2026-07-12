export default function getCommand() {

    const command = process.argv[2];

    if (!command) {
        return "publish";
    }

    return command.toLowerCase();

}