import { validateURL, validateDimension } from '../utils/validators.js';

export default class IframeCreator {
    constructor(options, logger) {
        this._containerId = options.containerId;
        this.setUrl(options.url);
        this.setWidth(options.width || '100%');
        this.setHeight(options.height || '600px');
        this.sandboxAttributes = options.sandboxAttributes || 'allow-same-origin allow-scripts';
        this.title = options.title || 'Contenido incrustado';
        this.logger = logger;

        // Validar los parámetros antes de proceder
        this.validateParameters(options);
    }

    validateParameters(options) {
        if (!validateURL(options.url)) {
            throw new Error(`La URL proporcionada no es válida: ${options.url}`);
        }
        if (!validateDimension(options.width)) {
            throw new Error(`El ancho proporcionado no es válido: ${options.width}`);
        }
        if (!validateDimension(options.height)) {
            throw new Error(`La altura proporcionada no es válida: ${options.height}`);
        }
    }

    getUrl() {
        return this._url;
    }

    setUrl(url) {
        if (!validateURL(url)) {
            throw new Error(`La URL proporcionada no es válida: ${url}`);
        }
        this._url = url;
    }

    getWidth() {
        return this._width;
    }

    setWidth(width) {
        if (!validateDimension(width)) {
            throw new Error(`El ancho proporcionado no es válido: ${width}`);
        }
        this._width = width;
    }

    getHeight() {
        return this._height;
    }

    setHeight(height) {
        if (!validateDimension(height)) {
            throw new Error(`La altura proporcionada no es válida: ${height}`);
        }
        this._height = height;
    }

    createIframe() {
        try {
            this.logger.info('Intentando crear el iframe...');
            const container = document.getElementById(this._containerId);
            if (!container) {
                throw new Error(`El contenedor con ID "${this._containerId}" no fue encontrado.`);
            }

            const iframe = document.createElement('iframe');
            iframe.src = this.getUrl();
            iframe.width = this.getWidth();
            iframe.height = this.getHeight();
            iframe.setAttribute('frameBorder', '0');

            // Asegurarse de incluir el permiso 'allow-forms' en el sandbox
            iframe.setAttribute('sandbox', `${this.sandboxAttributes} allow-forms`);

            iframe.setAttribute('title', this.title);
            iframe.classList.add('embedded-iframe');

            iframe.onload = () => {
                this.logger.info(`Iframe cargado correctamente con URL: ${this.getUrl()}`);
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
