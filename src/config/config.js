import fs from 'fs';
import path from 'path';
import validate from './validator.js';

export default function loadConfig() {
    const configPath = path.join(process.cwd(), 'config','publisher.json');
    if (!fs.existsSync(configPath))throw new Error(`File config.json tidak ditemukan di path: ${configPath}`);
    const config =JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    validate(config);
    return config;  
    
}

