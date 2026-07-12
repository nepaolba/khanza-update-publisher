import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import validate from './validator.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function loadConfig() {
    const configPath = path.resolve(__dirname, '..', '..', 'config', 'publisher.json');
    if (!fs.existsSync(configPath)) throw new Error(`File publisher.json tidak ditemukan di path: ${configPath}`);
    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    validate(config);
    return config;

}

