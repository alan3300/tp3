# VETA — Colectivo de artes multimediales

Portafolio web del colectivo formado por **Alan Verruá**, **Florencia Olivera** y
**Fiorella Carretino**, realizado para el TP3 de Informática General (UNA).

Sitio publicado en: **https://alan3300.github.io/tp3/**

## Cómo está armado

```
index.html      Portafolio: portada + una obra y un autor a pantalla completa
galeria.html    Muro de obras, filtros por autor y visor
contacto.html   Formulario y fichas de contacto de cada autor
estilos.css     Sistema visual (paleta, tipografías, retícula)
funciones.js    Muro generado con JS, filtros, visor, índice y formulario
fonts/          Webfonts locales (.woff2) con @font-face
img/            Obras exportadas al tamaño en que se muestran
layout/         Maquetas de diseño en PNG, JPG y .ai, con las medidas
```

## Identidad

- **Nombre:** VETA (la costura por donde asoma el material).
- **Logo:** un lienzo atravesado por una costura partida en tres tramos, uno por autor.
- **Paleta:** tinta `#14110F`, papel `#F2EEE6`, veta `#E4572E` y bruma `#8F8A82`.
- **Tipografías:** Playfair Display (titulares) y Montserrat (texto), servidas desde
  `fonts/` con `@font-face`.

Todo el diseño está documentado con medidas en [`layout/medidas.txt`](layout/medidas.txt)
y en las maquetas `layout/index`, `layout/galeria` y `layout/contacto` (PNG, JPG y .ai).

## Decisiones técnicas

- La **galería se construye con JavaScript** en `funciones.js`: el muro se arma a
  partir de un array de datos, los filtros por autor filtran ese array y el visor
  abre cada obra (imagen, video local o embed de YouTube) con navegación por teclado
  (← → Esc). No hay CSS `:target` ni páginas extra por imagen.
- Las **imágenes están exportadas al tamaño en que se muestran**: las miniaturas
  del muro miden 400 px de ancho —el ancho real de la columna— y las versiones
  grandes son los archivos originales. En el HTML no hay atributos `width` ni
  `height`, y el CSS no reduce ninguna imagen.
- Los **nombres de archivo están normalizados** en minúsculas y sin acentos, para
  que no se rompan por diferencias de mayúsculas o tildes al subir al servidor.
- El **.mov de la rotoescopia** de Florencia se convirtió a MP4 (H.264, 1280 px)
  para que el sitio no pese 37 MB de más.

## Integrantes

- Verruá, Alan
- Olivera, Florencia
- Carretino, Fiorella
