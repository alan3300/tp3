/* ==========================================================================
   VETA — funciones del sitio
   1. Datos de las obras.
   2. Muro de la galeria: se arma con JavaScript, no con paginas extra
   3. Filtros por autor, con contador
   4. Visor de obra con navegación por teclado
   5. Índice de obras del 'index'
   6. Validar del formulario de contacto
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const AUTORES = {
    alan: { nombre: 'Alan Verruá', rol: 'Video y rotoscopia' },
    florencia: { nombre: 'Florencia Olivera', rol: 'Imagen e impresión' },
    fiorella: { nombre: 'Fiorella Carretino', rol: 'Fotografía digital' }
  };

  /* --- 1. Las obras ---------------------------------------------------------
     mini   : archivo de 400 px de ancho (el ancho real de la columna del muro)
     grande : archivo original de la obra, sin reescalar
     ---------------------------------------------------------------------- */
  const OBRAS = [
    // --- Alan Verruá ---------------------------------------------------------
    { id: 'alan-rotoscopia-01', artista: 'alan', titulo: 'Rotoscopia 01',
      tecnica: 'Rotoscopia sobre frames', mini: 'img/alan/rotoscopia-01-mini.jpg',
      grande: 'img/alan/rotoscopia-01.jpg',
      alt: 'Rotoscopia 01 de Alan Verruá: un personaje recortado sobre una imagen en movimiento.' },
    { id: 'alan-rotoscopia-02', artista: 'alan', titulo: 'Rotoscopia 02',
      tecnica: 'Rotoscopia sobre frames', mini: 'img/alan/rotoscopia-02-mini.jpg',
      grande: 'img/alan/rotoscopia-02.jpg',
      alt: 'Rotoscopia 02 de Alan Verruá: silueta delineada sobre una escena filmada.' },
    { id: 'alan-rotoscopia-03', artista: 'alan', titulo: 'Rotoscopia 03',
      tecnica: 'Rotoscopia sobre frames', mini: 'img/alan/rotoscopia-03-mini.jpg',
      grande: 'img/alan/rotoscopia-03.jpg',
      alt: 'Rotoscopia 03 de Alan Verruá: trazo de rotoscopia superpuesto a un plano original.' },
    { id: 'alan-perspectiva-01', artista: 'alan', titulo: 'Perspectiva',
      tecnica: 'Proyecto visual', mini: 'img/alan/perspectiva-01-mini.jpg',
      grande: 'img/alan/perspectiva-01.jpg',
      alt: 'Perspectiva de Alan Verruá: composición con líneas de fuga y color plano.' },
    { id: 'alan-perspectiva-02', artista: 'alan', titulo: 'Perspectiva 02',
      tecnica: 'Proyecto visual', mini: 'img/alan/perspectiva-02-mini.jpg',
      grande: 'img/alan/perspectiva-02.jpg',
      alt: 'Perspectiva 02 de Alan Verruá: agrupación de figuras dentro de una estructura geométrica.' },
    { id: 'alan-perspectiva-03', artista: 'alan', titulo: 'Perspectiva 03',
      tecnica: 'Proyecto visual', mini: 'img/alan/perspectiva-03-mini.jpg',
      grande: 'img/alan/perspectiva-03.jpg',
      alt: 'Perspectiva 03 de Alan Verruá: escena en perspectiva con repetición de figuras.' },
    { id: 'alan-perspectiva-04', artista: 'alan', titulo: 'Perspectiva 04',
      tecnica: 'Proyecto visual', mini: 'img/alan/perspectiva-04-mini.jpg',
      grande: 'img/alan/perspectiva-04.jpg',
      alt: 'Perspectiva 04 de Alan Verruá: estudios de composición en tonos verdes.' },
    { id: 'alan-proyecto-visual-01', artista: 'alan', titulo: 'Proyecto visual 01',
      tecnica: 'Proyecto visual', mini: 'img/alan/proyecto-visual-01-mini.jpg',
      grande: 'img/alan/proyecto-visual-01.jpg',
      alt: 'Proyecto visual 01 de Alan Verruá: montaje de fragmentos fotográficos.' },
    { id: 'alan-proyecto-visual-02', artista: 'alan', titulo: 'Proyecto visual 02',
      tecnica: 'Proyecto visual', mini: 'img/alan/proyecto-visual-02-mini.jpg',
      grande: 'img/alan/proyecto-visual-02.jpg',
      alt: 'Proyecto visual 02 de Alan Verruá: collage en tonos verdes y negros.' },
    { id: 'alan-proyecto-visual-03', artista: 'alan', titulo: 'Proyecto visual 03',
      tecnica: 'Proyecto visual', mini: 'img/alan/proyecto-visual-03-mini.jpg',
      grande: 'img/alan/proyecto-visual-03.jpg',
      alt: 'Proyecto visual 03 de Alan Verruá: composición gráfica con bloques de color.' },
    { id: 'alan-proyecto-visual-04', artista: 'alan', titulo: 'Proyecto visual 04',
      tecnica: 'Proyecto visual', mini: 'img/alan/proyecto-visual-04-mini.jpg',
      grande: 'img/alan/proyecto-visual-04.jpg',
      alt: 'Proyecto visual 04 de Alan Verruá: superposición de planos fotográficos.' },
    { id: 'alan-collage-pv-02', artista: 'alan', titulo: 'Collage PV2',
      tecnica: 'Collage', mini: 'img/alan/collage-pv-02-mini.jpg',
      grande: 'img/alan/collage-pv-02.jpg',
      alt: 'Collage PV2 de Alan Verruá: composición vertical de recortes y texturas.' },
    { id: 'alan-video-construccion', artista: 'alan', titulo: 'De Construcción',
      tecnica: 'Video', tipo: 'youtube',
      mini: 'img/alan/video-de-construccion-mini.jpg', grande: 'img/alan/video-de-construccion.jpg',
      embed: 'https://www.youtube.com/embed/PLNh84o-byw',
      enlace: 'https://youtu.be/PLNh84o-byw',
      alt: 'Fotograma del video De Construcción de Alan Verruá.' },
    { id: 'alan-video-oo', artista: 'alan', titulo: 'O . O',
      tecnica: 'Video', tipo: 'youtube',
      mini: 'img/alan/video-o-o-mini.jpg', grande: 'img/alan/video-o-o.jpg',
      embed: 'https://www.youtube.com/embed/2CIjwGa_yIs',
      enlace: 'https://youtu.be/2CIjwGa_yIs',
      alt: 'Fotograma del video O . O de Alan Verruá.' },

    // --- Florencia Olivera ---------------------------------------------------
    { id: 'florencia-caracterizacion-serie-web', artista: 'florencia',
      titulo: 'Caracterización de personaje — Serie web',
      tecnica: 'Caracterización / serie web', mini: 'img/florencia/caracterizacion-serie-web-mini.jpg',
      grande: 'img/florencia/caracterizacion-serie-web.jpg',
      alt: 'Caracterización de personaje para serie web de Florencia Olivera: figura completa sobre fondo claro.' },
    { id: 'florencia-caracterizacion-una-y-carne', artista: 'florencia',
      titulo: 'Caracterización de personaje — «Uña y carne»',
      tecnica: 'Caracterización / cortometraje', mini: 'img/florencia/caracterizacion-una-y-carne-mini.jpg',
      grande: 'img/florencia/caracterizacion-una-y-carne.jpg',
      alt: 'Caracterización de personaje del cortometraje Uña y carne de Florencia Olivera.' },
    { id: 'florencia-escenografia-una-y-carne', artista: 'florencia',
      titulo: 'Escenografía y caracterización — «Uña y carne»',
      tecnica: 'Escenografía / cortometraje', mini: 'img/florencia/escenografia-una-y-carne-mini.jpg',
      grande: 'img/florencia/escenografia-una-y-carne.jpg',
      alt: 'Escenografía y caracterización del cortometraje Uña y carne de Florencia Olivera.' },
    { id: 'florencia-foto-libro', artista: 'florencia', titulo: 'Foto-libro',
      tecnica: 'Foto-libro', mini: 'img/florencia/foto-libro-mini.jpg',
      grande: 'img/florencia/foto-libro.jpg',
      alt: 'Foto-libro de Florencia Olivera: páginas abiertas con fotografías impresas.' },
    { id: 'florencia-fotocollage-analogico', artista: 'florencia',
      titulo: 'Fotocollage analógico — Paraíso',
      tecnica: 'Fotocollage analógico', mini: 'img/florencia/fotocollage-analogico-mini.jpg',
      grande: 'img/florencia/fotocollage-analogico.jpg',
      alt: 'Fotocollage analógico Paraíso de Florencia Olivera: fragmentos superpuestos en tonos cálidos.' },
    { id: 'florencia-cianotipia', artista: 'florencia',
      titulo: 'Proceso de impresión fotográfica — Cianotipia',
      tecnica: 'Cianotipia / impresión', mini: 'img/florencia/cianotipia-mini.jpg',
      grande: 'img/florencia/cianotipia.jpg',
      alt: 'Proceso de impresión fotográfica de Florencia Olivera: cianotipia sobre la mesa de trabajo.' },
    { id: 'florencia-rotoescopia', artista: 'florencia', titulo: 'Rotoescopia',
      tecnica: 'Video (rotoscopia)', tipo: 'video',
      mini: 'img/florencia/rotoescopia-poster-mini.jpg', grande: 'img/florencia/rotoescopia-poster.jpg',
      video: 'img/florencia/rotoescopia.mp4',
      alt: 'Rotoescopia de Florencia Olivera: fotograma del video con el trazo de rotoscopia.' },

    // --- Fiorella Carretino ---------------------------------------------------
    { id: 'fiorella-fotografia-01', artista: 'fiorella', titulo: 'Fotografía 01',
      tecnica: 'Fotografía digital', mini: 'img/fiorella/fotografia-01-mini.jpg',
      grande: 'img/fiorella/fotografia-01.jpg',
      alt: 'Fotografía 01 de Fiorella Carretino: una flor blanca sobre un paño rojo.' },
    { id: 'fiorella-fotografia-02', artista: 'fiorella', titulo: 'Fotografía 02',
      tecnica: 'Fotografía digital', mini: 'img/fiorella/fotografia-02-mini.jpg',
      grande: 'img/fiorella/fotografia-02.jpg',
      alt: 'Fotografía 02 de Fiorella Carretino: fachada con persianas y una figura en el marco.' },
    { id: 'fiorella-fotografia-03', artista: 'fiorella', titulo: 'Fotografía 03',
      tecnica: 'Fotografía digital', mini: 'img/fiorella/fotografia-03-mini.jpg',
      grande: 'img/fiorella/fotografia-03.jpg',
      alt: 'Fotografía 03 de Fiorella Carretino: flores blancas sobre un fondo de tierra.' },
    { id: 'fiorella-fotografia-04', artista: 'fiorella', titulo: 'Fotografía 04',
      tecnica: 'Fotografía digital', mini: 'img/fiorella/fotografia-04-mini.jpg',
      grande: 'img/fiorella/fotografia-04.jpg',
      alt: 'Fotografía 04 de Fiorella Carretino: interior con ventana iluminada al anochecer.' },
    { id: 'fiorella-fotografia-05', artista: 'fiorella', titulo: 'Fotografía 05',
      tecnica: 'Fotografía digital', mini: 'img/fiorella/fotografia-05-mini.jpg',
      grande: 'img/fiorella/fotografia-05.jpg',
      alt: 'Fotografía 05 de Fiorella Carretino: tronco de árbol y ramas vistas desde abajo.' },
    { id: 'fiorella-fotografia-06', artista: 'fiorella', titulo: 'Fotografía 06',
      tecnica: 'Fotografía digital', mini: 'img/fiorella/fotografia-06-mini.jpg',
      grande: 'img/fiorella/fotografia-06.jpg',
      alt: 'Fotografía 06 de Fiorella Carretino: insecto dorado sobre una hoja.' },
    { id: 'fiorella-fotografia-07', artista: 'fiorella', titulo: 'Fotografía 07',
      tecnica: 'Fotografía digital', mini: 'img/fiorella/fotografia-07-mini.jpg',
      grande: 'img/fiorella/fotografia-07.jpg',
      alt: 'Fotografía 07 de Fiorella Carretino: Perspectiva entre lamas de una persiana.' },
    { id: 'fiorella-fotografia-08', artista: 'fiorella', titulo: 'Fotografía 08',
      tecnica: 'Fotografía digital', mini: 'img/fiorella/fotografia-08-mini.jpg',
      grande: 'img/fiorella/fotografia-08.jpg',
      alt: 'Fotografía 08 de Fiorella Carretino: pared de piedra con una planta en primer plano.' },
    { id: 'fiorella-fotografia-09', artista: 'fiorella', titulo: 'Fotografía 09',
      tecnica: 'Fotografía digital', mini: 'img/fiorella/fotografia-09-mini.jpg',
      grande: 'img/fiorella/fotografia-09.jpg',
      alt: 'Fotografía 09 de Fiorella Carretino: luz atravesando la copa de un árbol.' },
    { id: 'fiorella-fotografia-10', artista: 'fiorella', titulo: 'Fotografía 10',
      tecnica: 'Fotografía digital', mini: 'img/fiorella/fotografia-10-mini.jpg',
      grande: 'img/fiorella/fotografia-10.jpg',
      alt: 'Fotografía 10 de Fiorella Carretino: calle angosta entre casas, al atardecer.' },
    { id: 'fiorella-fotografia-11', artista: 'fiorella', titulo: 'Fotografía 11',
      tecnica: 'Fotografía digital', mini: 'img/fiorella/fotografia-11-mini.jpg',
      grande: 'img/fiorella/fotografia-11.jpg',
      alt: 'Fotografía 11 de Fiorella Carretino: vereda y seto recortado por la sombra.' },
    { id: 'fiorella-fotografia-12', artista: 'fiorella', titulo: 'Fotografía 12',
      tecnica: 'Fotografía digital', mini: 'img/fiorella/fotografia-12-mini.jpg',
      grande: 'img/fiorella/fotografia-12.jpg',
      alt: 'Fotografía 12 de Fiorella Carretino: ramas de un árbol en flor rosada.' },
    { id: 'fiorella-fotografia-13', artista: 'fiorella', titulo: 'Fotografía 13',
      tecnica: 'Fotografía digital', mini: 'img/fiorella/fotografia-13-mini.jpg',
      grande: 'img/fiorella/fotografia-13.jpg',
      alt: 'Fotografía 13 de Fiorella Carretino: mural pintado sobre una medianera.' },
    { id: 'fiorella-fotografia-14', artista: 'fiorella', titulo: 'Fotografía 14',
      tecnica: 'Fotografía digital', mini: 'img/fiorella/fotografia-14-mini.jpg',
      grande: 'img/fiorella/fotografia-14.jpg',
      alt: 'Fotografía 14 de Fiorella Carretino: estructura de vidrio y metal en diagonal.' },
    { id: 'fiorella-fotografia-15', artista: 'fiorella', titulo: 'Fotografía 15',
      tecnica: 'Fotografía digital', mini: 'img/fiorella/fotografia-15-mini.jpg',
      grande: 'img/fiorella/fotografia-15.jpg',
      alt: 'Fotografía 15 de Fiorella Carretino: hojas de una planta iluminadas contra el cielo.' },
    { id: 'fiorella-fotografia-16', artista: 'fiorella', titulo: 'Fotografía 16',
      tecnica: 'Fotografía digital', mini: 'img/fiorella/fotografia-16-mini.jpg',
      grande: 'img/fiorella/fotografia-16.jpg',
      alt: 'Fotografía 16 de Fiorella Carretino: hojas verdes y luz rasante.' }
  ];

  /* --- 2. Muro de la galería ------------------------------------------------ */
  const muro = document.querySelector('#muro');

  if (muro) {
    const autor = (clave) => AUTORES[clave];

    function crearObra(obra) {
      const article = document.createElement('article');
      article.className = 'obra';
      article.dataset.artista = obra.artista;
      article.dataset.id = obra.id;

      const boton = document.createElement('button');
      boton.className = 'obra-lanzador';
      boton.type = 'button';
      boton.setAttribute('aria-label', 'Ver ' + obra.titulo + ' de ' + autor(obra.artista).nombre + ' en tamaño grande');

      const imagen = document.createElement('img');
      imagen.src = obra.mini;
      imagen.alt = obra.alt;

      if (obra.tipo) {
        const marco = document.createElement('div');
        marco.className = 'obra-marco-video';
        marco.appendChild(imagen);
        boton.appendChild(marco);
      } else {
        boton.appendChild(imagen);
      }
      article.appendChild(boton);

      const datos = document.createElement('div');
      datos.className = 'obra-datos';

      const titulo = document.createElement('h3');
      titulo.className = 'obra-titulo';
      titulo.textContent = obra.titulo;

      const nombreAutor = document.createElement('span');
      nombreAutor.className = 'obra-autor';
      nombreAutor.textContent = autor(obra.artista).nombre.split(' ')[0];

      datos.appendChild(titulo);
      datos.appendChild(nombreAutor);
      article.appendChild(datos);

      const tecnica = document.createElement('p');
      tecnica.className = 'obra-tecnica';
      tecnica.textContent = obra.tecnica;
      article.appendChild(tecnica);

      return article;
    }

    OBRAS.forEach((obra) => muro.appendChild(crearObra(obra)));

    /* --- 3. Filtros por autor ------------------------------------------------ */
    const filtros = Array.from(document.querySelectorAll('.filtro'));
    const tarjetas = Array.from(muro.querySelectorAll('.obra'));
    const vacio = document.querySelector('#muro-vacio');

    function contar(cantidad, filtro) {
      const contador = document.querySelector('[data-cuenta="' + filtro + '"]');
      if (contador) {
        contador.textContent = cantidad;
      }
    }

    contar(OBRAS.length, 'todos');
    Object.keys(AUTORES).forEach((clave) => {
      contar(OBRAS.filter((obra) => obra.artista === clave).length, clave);
    });

    let visibles = OBRAS.slice();

    function aplicarFiltro(filtro) {
      visibles = filtro === 'todos'
        ? OBRAS.slice()
        : OBRAS.filter((obra) => obra.artista === filtro);

      tarjetas.forEach((tarjeta) => {
        tarjeta.hidden = !visibles.some((obra) => obra.id === tarjeta.dataset.id);
      });

      filtros.forEach((boton) => {
        const activo = boton.dataset.filtro === filtro;
        boton.classList.toggle('activo', activo);
        boton.setAttribute('aria-pressed', activo ? 'true' : 'false');
      });

      if (vacio) {
        vacio.hidden = visibles.length > 0;
      }
    }

    filtros.forEach((boton) => {
      boton.addEventListener('click', () => aplicarFiltro(boton.dataset.filtro));
    });

    // permite llegar con ?autor=alan desde el index
    const pedido = new URLSearchParams(window.location.search).get('autor');
    if (pedido && Object.prototype.hasOwnProperty.call(AUTORES, pedido)) {
      aplicarFiltro(pedido);
    }

    /* --- 4. Visor de obra ---------------------------------------------------- */
    const visor = document.querySelector('#visor');
    const lienzo = document.querySelector('#visor-lienzo');
    const visorTitulo = document.querySelector('#visor-titulo');
    const visorMeta = document.querySelector('#visor-meta');
    const visorEnlace = document.querySelector('#visor-enlace');
    const visorEnlaceCaja = document.querySelector('#visor-enlace-caja');
    const botonCerrar = document.querySelector('#visor-cerrar');
    const botonPrev = document.querySelector('#visor-prev');
    const botonNext = document.querySelector('#visor-next');
    let indiceActual = 0;
    let ultimoFoco = null;

    function mostrar(obra) {
      lienzo.innerHTML = '';

      if (obra.tipo === 'youtube') {
        const iframe = document.createElement('iframe');
        iframe.src = obra.embed;
        iframe.title = obra.titulo + ' — ' + autor(obra.artista).nombre;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.loading = 'lazy';
        lienzo.appendChild(iframe);
      } else if (obra.tipo === 'video') {
        const video = document.createElement('video');
        video.src = obra.video;
        video.controls = true;
        video.autoplay = true;
        video.poster = obra.grande;
        lienzo.appendChild(video);
      } else {
        const imagen = document.createElement('img');
        imagen.src = obra.grande;
        imagen.alt = obra.alt;
        lienzo.appendChild(imagen);
      }

      visorTitulo.textContent = obra.titulo;
      visorMeta.textContent = autor(obra.artista).nombre + ' — ' + obra.tecnica;

      if (obra.enlace) {
        visorEnlace.href = obra.enlace;
        visorEnlaceCaja.hidden = false;
      } else {
        visorEnlaceCaja.hidden = true;
      }
    }

    function abrirVisor(id) {
      const posicion = visibles.findIndex((obra) => obra.id === id);
      if (posicion < 0) {
        return;
      }
      indiceActual = posicion;
      mostrar(visibles[indiceActual]);
      visor.hidden = false;
      document.body.style.overflow = 'hidden';
      botonCerrar.focus();
    }

    function cerrarVisor() {
      visor.hidden = true;
      lienzo.innerHTML = '';
      document.body.style.overflow = '';
      if (ultimoFoco) {
        ultimoFoco.focus();
      }
    }

    function mover(paso) {
      if (visibles.length === 0) {
        return;
      }
      indiceActual = (indiceActual + paso + visibles.length) % visibles.length;
      mostrar(visibles[indiceActual]);
    }

    muro.addEventListener('click', (evento) => {
      const boton = evento.target.closest('.obra-lanzador');
      if (!boton) {
        return;
      }
      const tarjeta = boton.closest('.obra');
      ultimoFoco = boton;
      abrirVisor(tarjeta.dataset.id);
    });

    botonCerrar.addEventListener('click', cerrarVisor);
    botonPrev.addEventListener('click', () => mover(-1));
    botonNext.addEventListener('click', () => mover(1));

    visor.addEventListener('click', (evento) => {
      if (evento.target === visor) {
        cerrarVisor();
      }
    });

    document.addEventListener('keydown', (evento) => {
      if (visor.hidden) {
        return;
      }
      if (evento.key === 'Escape') {
        cerrarVisor();
      } else if (evento.key === 'ArrowLeft') {
        mover(-1);
      } else if (evento.key === 'ArrowRight') {
        mover(1);
      }
    });
  }

  /* --- 5. Índice de obras del index ---------------------------------------- */
  const indice = document.querySelector('#indice-obras');

  if (indice) {
    OBRAS.forEach((obra, i) => {
      const item = document.createElement('li');

      const numero = document.createElement('span');
      numero.className = 'obra-num';
      numero.textContent = String(i + 1).padStart(2, '0');

      const titulo = document.createElement('span');
      titulo.className = 'obra-titulo';
      titulo.textContent = obra.titulo;

      const meta = document.createElement('span');
      meta.className = 'obra-meta';
      meta.textContent = AUTORES[obra.artista].nombre + ' — ' + obra.tecnica;

      item.appendChild(numero);
      item.appendChild(titulo);
      item.appendChild(meta);
      indice.appendChild(item);
    });

    const total = document.querySelector('#indice-total');
    if (total) {
      total.textContent = OBRAS.length + ' obras · ' + Object.keys(AUTORES).length + ' autores';
    }
  }

  /* --- 6. Formulario de contacto ------------------------------------------- */
  const formulario = document.querySelector('#formulario-contacto');

  if (formulario) {
    const mensaje = document.querySelector('#mensaje-formulario');

    formulario.addEventListener('submit', (evento) => {
      evento.preventDefault();

      const nombre = formulario.nombre.value.trim();
      const email = formulario.email.value.trim();
      const texto = formulario.mensaje.value.trim();
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!nombre || !email || !texto) {
        mensaje.textContent = 'Completá nombre, correo y mensaje.';
        mensaje.className = 'mensaje error';
        return;
      }

      if (!emailValido) {
        mensaje.textContent = 'Ingresá un correo electrónico válido.';
        mensaje.className = 'mensaje error';
        return;
      }

      mensaje.textContent = '¡Gracias! Tu mensaje fue validado correctamente.';
      mensaje.className = 'mensaje ok';
      formulario.reset();
    });
  }
});
