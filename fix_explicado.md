# Hola Gaby, te explico el fix

Había varios quilombos, uno de ellos era que le estabas diciendo a Next que tu build tenía que buscar los assets (las imagnes, estilos, etc) en una carpeta que no existe en el servidor de Github pages. Después había errores en como vos accedias a esos recursos en tu page.tsx y layout.tsx. Para arreglarlo y commitear desde tu pc hace lo siguiente:
- Subi los cambios a tu repo
- Entra al repo de github, despues a settings, despues a pages y pones en Source la opcion build from a branch
- Depues en donde dice /(root) cambialo a la opcion /docs

Si ves que en el build te tirra un error y el mensaje de error menciona a Jekyll, tenes que agregar una linea que cree un archivo vacio que se llame ,nojekyll para evitar que Github pages intente correr el build de Jekyll