import IframeValidator from './IframeValidator.js';

export default class IframeCreator {
    constructor(options, logger) {
        this.containerId = options.containerId;
        this.url = options.url;
        this.width = options.width || '100%';
        this.height = options.height || '600px';
        this.sandboxAttributes = options.sandboxAttributes || 'allow-same-origin allow-scripts';
        this.title = options.title || 'Contenido incrustado';
        this.logger = logger;

        // Validar los parámetros antes de proceder
        IframeValidator.validateParameters(options, this.logger);
    }

    createIframe() {
        try {
            this.logger.info('Intentando crear el iframe...');
            const container = document.getElementById(this.containerId);
            if (!container) {
                throw new Error(`El contenedor con ID "${this.containerId}" no fue encontrado.`);
            }

            const iframe = document.createElement('iframe');
            iframe.src = this.url;
            iframe.width = this.width;
            iframe.height = this.height;
            iframe.setAttribute('frameBorder', '0');
            iframe.setAttribute('sandbox', this.sandboxAttributes);
            iframe.setAttribute('title', this.title);
            iframe.classList.add('embedded-iframe');

            iframe.onload = () => {
                this.logger.info(`Iframe cargado correctamente con URL: ${this.url}`);
            };

            iframe.onerror = (error) => {
                this.logger.error(`Error al cargar el iframe: ${error.message}`);
            };

            container.appendChild(iframe);
            this.logger.info('Iframe insertado correctamente en el DOM.');
        } catch (error) {
            this.logger.error(`Error al crear el iframe: ${error.message}`);
        }
    }
}
