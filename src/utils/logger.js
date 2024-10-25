export default class Logger {
    constructor(level = 'info') {
        this.levels = ['error', 'warn', 'info', 'debug'];
        this.currentLevel = this.levels.indexOf(level);
    }

    log(level, message) {
        if (this.levels.indexOf(level) <= this.currentLevel) {
            console[level](message);
        }
    }

    error(message) {
        this.log('error', message);
    }

    warn(message) {
        this.log('warn', message);
    }

    info(message) {
        this.log('info', message);
    }

    debug(message) {
        this.log('debug', message);
    }
}
