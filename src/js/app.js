import IframeEmbedder from '../components/IframeEmbedder.js';
import Logger from '../utils/logger.js';
import config from '../config/config.js';

document.addEventListener('DOMContentLoaded', () => {
    const logger = new Logger('info');
    const iframeEmbedder = new IframeEmbedder({
        containerId: 'iframe-container',
        url: config.iframeURL,
        width: '100%',
        height: '600px',
        sandboxAttributes: 'allow-same-origin allow-scripts',
        title: 'Contenido incrustado',
    }, logger);

    iframeEmbedder.createIframe();
});
