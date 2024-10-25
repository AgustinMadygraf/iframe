// iframe/src/js/app.js
import IframeCreator from '../components/IframeCreator.js';
import Logger from '../utils/logger.js';
import getIframeURL from '../config/config.js';

document.addEventListener('DOMContentLoaded', async () => {
    const logger = new Logger('info');
    const iframeURL = await getIframeURL(); // Obtener la URL desde url.txt

    if (!iframeURL) {
        logger.error('No se pudo cargar la URL del iframe.');
        return;
    }

    const iframeOptions = {
        containerId: 'iframe-container',
        url: iframeURL,
        width: '100%',
        height: '600px',
        sandboxAttributes: 'allow-same-origin allow-scripts',
        title: 'Contenido incrustado',
    };
    const iframeCreator = new IframeCreator(iframeOptions, logger);

    iframeCreator.createIframe();
});
