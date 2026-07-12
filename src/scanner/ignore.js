const DEFAULT_IGNORE = [
    ".git",
    ".github",
    ".idea",
    ".vscode",
    "node_modules",
    "logs",
    "release",
    "Thumbs.db",
    "desktop.ini"
];

export default function shouldIgnore(name, customIgnore = []) {
    return DEFAULT_IGNORE.includes(name) || customIgnore.includes(name);
}