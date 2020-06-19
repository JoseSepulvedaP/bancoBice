# Desafío técnico Banco Bice

## Probar APP en Navegador
La aplicación está compuesta por un Front desarrollado en Angular 9 desplegada en Firebase y una API REST NodeJS desplegada en Heroku. Para probar la aplicación, necesita ejecutar la siguiente URL `https://app-indecon.web.app`.

## Probar APP Local
Para probar la APP de forma Local primero que todo hay que instalar las dependencias necesarias en ambos proyectos usando el comando `npm install` en el directorio raiz de `app/` y `api/`. Luego de la instalación de las dependencias necesarias, debe ejecutar desde la consola el comando `ng serve` en la raíz de `app/` y en otra consola ejecutar el comando `npm start` en la raíz de `api/`. Con esta acción el proyecto estará levantado y puede probar de forma local la interacción de ambos en la url `http://localhost:4200`

## Ejecutar Test Unitarios APP
Para ejecutar los test unitarios debe considerar que las dependencias deben estar instaladas en `app/`. Desde la consola estando en el directorio raíz ejecutar el comando `npm run test`. Esta acción abrirá una ventana web que mostrará los test que se ejecutaron. Si desea obtener detalle de la cobertura en las pruebas debe ingresar en la carpeta `coverage/app` y abrir el archivo `index.html` en cualquier navegador web. 

## Ejecutar Test Unitarios API
Para ejecutar los test unitarios debe considerar que las dependencias deben estar instaladas en `api/`. Desde la consola estando en el directorio raíz ejecutar el comando `npm run test`. Esta acción iniciará el testeo de la api, el resultado de la ejecución se mostrará en la consola.