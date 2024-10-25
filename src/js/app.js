import IframeCreator from '../components/IframeCreator.js';
import Logger from '../utils/logger.js';
import config from '../config/config.js';

document.addEventListener('DOMContentLoaded', () => {
    const logger = new Logger('info');
    const iframeOptions = {
        containerId: 'iframe-container',
        url: config.iframeURL,
        width: config.iframeWidth || '100%',
        height: config.iframeHeight || '600px',
        sandboxAttributes: config.sandboxAttributes || 'allow-same-origin allow-scripts',
        title: config.iframeTitle || 'Contenido incrustado',
    };
    const iframeCreator = new IframeCreator(iframeOptions, logger);

    iframeCreator.createIframe();
});
