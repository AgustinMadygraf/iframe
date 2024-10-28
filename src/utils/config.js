// iframe-vue/src/utils/config.js

export async function getIframeURL() {
    try {
        const response = await fetch('/url.txt');
        if (!response.ok) {
            throw new Error(`Error al cargar url.txt: ${response.statusText}`);
        }
        const url = await response.text();
        return url.trim();
    } catch (error) {
        console.error('Error al obtener la URL del iframe:', error);
        return null;
    }
}
