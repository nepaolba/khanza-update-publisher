function timestamp() {
    return new Date().toLocaleTimeString("id-ID", {
        hour12: false
    });
}

export function info(message) {
    console.log(`[${timestamp()}] ${message}`);
}

export function success(message) {
    console.log(`[${timestamp()}] ✓ ${message}`);
}

export function warn(message) {
    console.warn(`[${timestamp()}] ! ${message}`);
}

export function error(message) {
    console.error(`[${timestamp()}] ✗ ${message}`);
}

export default {
    info,
    success,
    warn,
    error
};