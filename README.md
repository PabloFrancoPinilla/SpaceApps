# SpaceApps
Documentación del Proyecto HTML, JS y CSS
-Introducción
Esta documentación proporciona información sobre un proyecto web que utiliza HTML, JavaScript y CSS para crear un sitio web relacionado con el sistema solar.

-Estructura de Carpetas y Archivos
El proyecto está organizado de la siguiente manera:

index.html: El archivo principal HTML que contiene la estructura de la página.
estilos/: Carpeta que contiene archivos CSS para el estilo del sitio.
normalize.css: Una hoja de estilo CSS que normaliza los estilos en diferentes navegadores.
styles.css: El archivo principal de estilos personalizados para el proyecto.
img/: Carpeta que contiene imágenes utilizadas en el sitio web.
planetas/: Carpeta que contiene imágenes de los planetas del sistema solar.
main.js: Archivo JavaScript que contiene la lógica principal del sitio.
zoom.js: Archivo JavaScript adicional (puedes proporcionar más detalles sobre su función).
-Funcionalidad Principal
El proyecto tiene las siguientes funcionalidades principales:

Mostrar información detallada de los planetas del sistema solar al hacer clic en sus respectivas imágenes.
Ocultar la página principal al mostrar la información detallada del planeta seleccionado.
Permitir la navegación de regreso a la página principal desde la información detallada de un planeta.
Uso de JavaScript
El archivo main.js contiene la funcionalidad principal del proyecto. Aquí se utilizan las siguientes funciones:

ocultarPaginaPorId(idElemento): Esta función se encarga de ocultar la página principal y mostrar la información detallada de un planeta según el idElemento proporcionado. Utiliza la función fetch para obtener datos de una API relacionada con el sistema solar y luego actualiza el contenido en la página.

volver(): Esta función permite regresar desde la información detallada de un planeta a la página principal. Oculta la información detallada y muestra la página principal nuevamente.

Integración con Annyang: El proyecto utiliza la biblioteca Annyang para reconocer comandos de voz y permitir la navegación por voz. Se han configurado comandos para cada planeta y el comando "volver".

Estilos CSS
Los estilos del proyecto se encuentran en los archivos CSS en la carpeta estilos/. El archivo styles.css contiene los estilos personalizados para el sitio web, mientras que normalize.css se utiliza para normalizar los estilos en diferentes navegadores.

Estructura HTML
El archivo index.html contiene la estructura HTML del sitio web. Se utiliza una estructura de encabezado, menú de navegación, información sobre el sistema solar y una sección para mostrar la información detallada de los planetas.

Inicialización y Carga
El proyecto se inicia después de la carga completa del documento HTML. Se utiliza un spinner para mostrar una carga visual mientras se cargan los recursos. Una vez que se completa la carga, se muestra el contenido principal del sitio.

Conclusiones
Este proyecto demuestra cómo crear un sitio web interactivo relacionado con el sistema solar utilizando HTML, JavaScript y CSS. Proporciona información detallada sobre cada planeta y permite la navegación por voz para una experiencia más interactiva.

Para cualquier pregunta adicional o detalles específicos sobre el proyecto, no dudes en ponerse en contacto.

¡Gracias por utilizar esta documentación!