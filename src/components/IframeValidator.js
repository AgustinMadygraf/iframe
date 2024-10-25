import { validateURL, validateDimension } from '../utils/validators.js';

export default class IframeValidator {
    static validateParameters({ url, width, height, containerId }, logger) {
        try {
            if (!validateURL(url)) {
                throw new Error(`La URL proporcionada no es válida: ${url}`);
            }
            if (!validateDimension(width)) {
                throw new Error(`El ancho proporcionado no es válido: ${width}`);
            }
            if (!validateDimension(height)) {
                throw new Error(`La altura proporcionada no es válida: ${height}`);
            }
            if (!containerId) {
                throw new Error('El ID del contenedor es obligatorio.');
            }
        } catch (error) {
            logger.error(`Error en la validación de parámetros: ${error.message}`);
            throw error;
        }
    }
}
