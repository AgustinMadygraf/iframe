import { validateURL, validateDimension } from '../utils/validators.js';

export default class IframeEmbedder {
    constructor(options, logger) {
        this.containerId = options.containerId;
        this.url = options.url;
        this.width = options.width || '100%';
        this.height = options.height || '600px';
        this.sandboxAttributes = options.sandboxAttributes || 'allow-same-origin allow-scripts';
        this.title = options.title || 'Contenido incrustado';
        this.logger = logger;

        this.validateParameters();
    }

    validateParameters() {
        try {
            if (!validateURL(this.url)) {
                throw new Error(`La URL proporcionada no es válida: ${this.url}`);
            }
            if (!validateDimension(this.width)) {
                throw new Error(`El ancho proporcionado no es válido: ${this.width}`);
            }
            if (!validateDimension(this.height)) {
                throw new Error(`La altura proporcionada no es válida: ${this.height}`);
            }
            if (!this.containerId) {
                throw new Error('El ID del contenedor es obligatorio.');
            }
        } catch (error) {
            this.logger.error(`Error en la validación de parámetros: ${error.message}`);
            throw error;
        }
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
