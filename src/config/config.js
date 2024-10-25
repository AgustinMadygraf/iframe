// iframe/src/config/config.js

async function getIframeURL() {
    try {
        // Detecta la carpeta raíz automáticamente basándote en la ubicación actual
        const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
        const urlTxtPath = `${basePath}/url.txt`;

        const response = await fetch(urlTxtPath); // Usa la ruta detectada dinámicamente
        if (!response.ok) {
            throw new Error(`Error al cargar url.txt: ${response.statusText}`);
        }

        const url = await response.text();
        return url.trim(); // Eliminamos cualquier espacio en blanco adicional
    } catch (error) {
        console.error('Error al obtener la URL del iframe desde url.txt:', error);
        return null;
    }
}

export default getIframeURL;
