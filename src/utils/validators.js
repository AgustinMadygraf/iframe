export function validateURL(url) {
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
}

export function validateDimension(value) {
    return /^(\d+)(px|%)$/.test(value);
}
