export function info(message) {

    console.log(message);

}

export function success(message) {

    console.log(`✓ ${message}`);

}

export function error(message) {

    console.error(`✗ ${message}`);

}

export function warn(message) {

    console.warn(`! ${message}`);

}