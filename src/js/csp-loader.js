// iframe/src/js/app.js
(async function() {
    try {
        // Detectar la ruta base de la aplicación
        const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
        const urlTxtPath = `${basePath}/url.txt`;

        // Obtener la URL del archivo url.txt
        const response = await fetch(urlTxtPath);
        if (!response.ok) {
            throw new Error(`Error al cargar url.txt: ${response.statusText}`);
        }
        const iframeUrl = (await response.text()).trim();

        // Crear el meta tag con la política de seguridad de contenido (CSP)
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('http-equiv', 'Content-Security-Policy');
        metaTag.setAttribute('content', `default-src 'self'; frame-src ${iframeUrl};`);

        // Insertar el meta tag en el <head> del documento
        document.head.appendChild(metaTag);
        console.log(`Política de seguridad aplicada: frame-src ${iframeUrl}`);
    } catch (error) {
        console.error('Error al configurar la Política de Seguridad de Contenido (CSP):', error);
    }
})();
