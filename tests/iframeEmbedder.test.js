import IframeEmbedder from '../src/components/IframeEmbedder.js';
import Logger from '../src/utils/logger.js';

test('Debe crear un iframe con la URL correcta', () => {
    document.body.innerHTML = '<div id="iframe-container"></div>';
    const logger = new Logger('error');
    const iframeEmbedder = new IframeEmbedder({
        containerId: 'iframe-container',
        url: 'http://example.com',
    }, logger);

    iframeEmbedder.createIframe();

    const iframe = document.querySelector('#iframe-container iframe');
    expect(iframe).not.toBeNull();
    expect(iframe.src).toBe('http://example.com/');
});
