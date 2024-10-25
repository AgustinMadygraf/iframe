# Proyecto: Incrustación de iFrame con JavaScript

## Descripción

Este proyecto es una aplicación web que permite incrustar el contenido de una URL externa dentro de un iframe de manera **segura** y **flexible**. Está diseñado utilizando JavaScript moderno y aplicando principios de **Programación Orientada a Objetos (POO)** y **modularidad** para garantizar la mantenibilidad y escalabilidad del código.

Se han incorporado mejoras en términos de **seguridad**, **accesibilidad** y **rendimiento**, siguiendo buenas prácticas y estándares actuales de desarrollo web.

## Características

- **Modularidad y Escalabilidad**: Código estructurado en módulos y clases para facilitar futuras expansiones.
- **Seguridad Mejorada**: Uso del atributo `sandbox` en el iframe y validación de URLs para prevenir vulnerabilidades.
- **Accesibilidad**: Inclusión de atributos ARIA y `title` para compatibilidad con lectores de pantalla.
- **Logger Personalizado**: Sistema de logging configurable con diferentes niveles de severidad.
- **Validación de Parámetros**: Verificación de la URL y dimensiones antes de crear el iframe.
- **Configuración Centralizada**: Parámetros clave gestionados desde un archivo de configuración.

## Requisitos Previos

- **Node.js** (versión 12 o superior)
- **Navegador web moderno** (con soporte para ES6)
- **Herramienta de servidor local** (opcional, para servir `index.html`)

## Estructura del Proyecto

```
/project-root
│
├── /src
│   ├── /assets
│   │   └── /css
│   │       └── styles.css          # Estilos generales
│   ├── /components
│   │   └── IframeEmbedder.js       # Clase principal para el iframe
│   ├── /js
│   │   └── app.js                  # Archivo principal que instancia la clase
│   ├── /utils
│   │   ├── logger.js               # Utilidad para manejo de logs
│   │   └── validators.js           # Funciones de validación
│   └── /config
│       └── config.js               # Archivo de configuración centralizada
│
├── /tests
│   └── iframeEmbedder.test.js      # Pruebas unitarias
│
├── index.html                      # Página principal
├── package.json                    # Dependencias y scripts de npm
└── README.md                       # Documentación del proyecto
```

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/AgustinMadygraf/iframe.git
   ```

2. **Navegar al directorio del proyecto:**

   ```bash
   cd iframe
   ```

3. **Instalar dependencias (si las hay):**

   ```bash
   npm install
   ```

   > *Nota:* Actualmente, el proyecto no tiene dependencias externas, pero este paso se incluye para futuras expansiones.

## Uso

### 1. Configurar la URL del iframe

Edita el archivo `src/config/config.js` y actualiza el valor de `iframeURL` con la URL que deseas incrustar:

```javascript
const config = {
    iframeURL: 'http://your-ngrok-ip.ngrok.io',
    // Otros parámetros de configuración si es necesario
};

export default config;
```

### 2. Abrir la aplicación en un navegador

Puedes abrir el archivo `index.html` directamente en tu navegador o servirlo utilizando una herramienta como `live-server`:

```bash
npx live-server
```

Esto abrirá el proyecto en `http://localhost:8080` o en otro puerto disponible.

## Configuración

Los parámetros del iframe pueden ajustarse en `src/js/app.js` o mediante el archivo de configuración `src/config/config.js`. Puedes modificar:

- **containerId**: ID del elemento contenedor donde se insertará el iframe.
- **url**: URL a incrustar en el iframe.
- **width**: Ancho del iframe (e.g., `'100%'`, `'800px'`).
- **height**: Altura del iframe (e.g., `'600px'`).
- **sandboxAttributes**: Atributos para el sandbox del iframe.
- **title**: Texto para el atributo `title` del iframe.

Ejemplo de configuración en `app.js`:

```javascript
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
```

## Pruebas

Las pruebas unitarias se encuentran en el directorio `/tests`. Para ejecutarlas:

1. **Instalar Jest u otra herramienta de pruebas:**

   ```bash
   npm install --save-dev jest
   ```

2. **Agregar un script de prueba en `package.json`:**

   ```json
   {
     "scripts": {
       "test": "jest"
     }
   }
   ```

3. **Ejecutar las pruebas:**

   ```bash
   npm test
   ```

> *Nota:* Asegúrate de configurar correctamente Jest o la herramienta de pruebas que prefieras.

## Estilos y Responsividad

Los estilos generales están en `src/assets/css/styles.css`. La clase `.embedded-iframe` se utiliza para el iframe, lo que permite personalizar sus estilos desde CSS.

Ejemplo:

```css
.embedded-iframe {
    max-width: 100%;
    border: none;
}
```

## Consideraciones de Seguridad

- **Contenido Mixto:** Asegúrate de que la página y la URL del iframe utilicen el mismo protocolo (`http` o `https`) para evitar problemas de contenido mixto.

- **Políticas de Seguridad de Contenido (CSP):** Considera implementar CSP en `index.html` para controlar qué recursos pueden ser cargados.

Ejemplo:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; frame-src http://your-ngrok-ip.ngrok.io;">
```

- **Atributo `sandbox`:** El uso del atributo `sandbox` en el iframe restringe acciones potencialmente inseguras.

## Compatibilidad del Navegador

Este proyecto utiliza módulos ES6 y características modernas de JavaScript. Para compatibilidad con navegadores más antiguos:

- **Transpilación con Babel:** Transpila el código ES6 a ES5.
- **Empaquetado con Webpack:** Empaqueta los módulos en un solo archivo compatible.

## Mejoras Futuras

- **Carga Diferida (Lazy Loading):** Implementar carga diferida del iframe para mejorar el rendimiento inicial.
- **Gestión de Dependencias:** Añadir y gestionar dependencias externas según las necesidades del proyecto.
- **Ampliación de Funcionalidades:** Incorporar nuevas características o componentes.

## Contribuciones

¡Las contribuciones son bienvenidas! Para contribuir:

1. **Realiza un fork** del proyecto.
2. **Crea una rama** para tu funcionalidad o corrección:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. **Realiza tus cambios** y asegúrate de que las pruebas pasan.
4. **Haz commit** de tus cambios con mensajes descriptivos.
5. **Envía una pull request** detallando los cambios realizados.

## Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo `LICENSE` para más detalles.

## Agradecimientos

Agradecemos a todos los colaboradores y a la comunidad por su apoyo y contribuciones para mejorar este proyecto.