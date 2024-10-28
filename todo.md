# To Do List: Implementación de Vue.js en Proyecto de Iframe

1. **Configurar Proyecto con Vue CLI**
   - [ ] Instalar Vue CLI si aún no está instalado: `npm install -g @vue/cli`
   - [ ] Crear un nuevo proyecto Vue en la carpeta `iframe`: `vue create iframe-vue`
   - [ ] Configurar el proyecto para trabajar con Vue Router y Vuex (opcional, si se requiere gestión de estado)

2. **Estructurar Archivos y Configuración**
   - [ ] Organizar la estructura de carpetas: mover los archivos existentes de `src` a `iframe-vue/src`, manteniendo componentes y utilidades.
   - [ ] Configurar rutas y vistas en Vue Router si es necesario, para que el proyecto esté modularizado.

3. **Crear Componente `IframeCreator.vue`**
   - [ ] Migrar el código de `IframeCreator.js` a un componente Vue (`IframeCreator.vue`), incluyendo las propiedades y métodos necesarios.
   - [ ] Definir las propiedades del componente (`props`) para recibir los parámetros necesarios como `url`, `width`, `height`, etc.
   - [ ] Usar la directiva `v-if` y `v-bind` para manejar la lógica de visualización y vinculación de atributos.

4. **Crear Componente `Logger.vue` o Servicio de Logging**
   - [ ] Implementar el sistema de logging en un componente o servicio Vue que pueda ser reutilizado y configurado globalmente.
   - [ ] Definir métodos como `error`, `warn`, `info`, y `debug` dentro de este componente o servicio.

5. **Configurar `getIframeURL` como Servicio**
   - [ ] Convertir `getIframeURL` en un servicio que se pueda importar y utilizar en los componentes Vue.
   - [ ] Manejar la llamada `fetch` en este servicio y devolver la URL, utilizando `async/await` dentro de los componentes que lo necesiten.

6. **Migrar la Lógica de Inicialización a `App.vue`**
   - [ ] En `App.vue`, usar el método `mounted` o `created` para manejar la inicialización de los componentes.
   - [ ] Llamar a `getIframeURL` en el ciclo de vida del componente para obtener la URL y pasarla a `IframeCreator`.

7. **Añadir CSS y Estilos en los Componentes Vue**
   - [ ] Migrar los estilos CSS existentes al nuevo proyecto y dividirlos en los componentes Vue correspondientes.
   - [ ] Utilizar el sistema de Scoped CSS en Vue para aislar los estilos de cada componente.

8. **Configurar la Política de Seguridad de Contenido (CSP)**
   - [ ] Agregar la lógica de CSP como un servicio o en `App.vue` para aplicarla dinámicamente en función de la URL del iframe.
   - [ ] Insertar el `meta` tag de CSP en el `head` del documento usando Vue en el montaje de `App.vue`.

9. **Crear y Configurar Componentes de Validación (`Validators.js`)**
   - [ ] Migrar `validateURL` y `validateDimension` a un módulo de validación en Vue o en un servicio.
   - [ ] Importar y usar estos validadores en `IframeCreator.vue` para verificar las propiedades de entrada.

10. **Probar e Integrar el Proyecto**
   - [ ] Realizar pruebas locales del proyecto para asegurar que el iframe se carga correctamente y que el logging y la configuración funcionan como esperado.
   - [ ] Configurar scripts de `npm` para desarrollo y despliegue (`npm run serve`, `npm run build`).
   - [ ] Realizar pruebas en distintos navegadores y ajustar las configuraciones de CSP y CORS si es necesario.

