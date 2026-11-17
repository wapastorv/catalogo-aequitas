/* ======================================================================
   AEQUITAS JURÍDICA · lógica del catálogo (sin dependencias)
   ====================================================================== */
(function () {
  'use strict';

  var btnPdf = document.getElementById('btn-pdf');

  /* ---------- 1. Imágenes locales: se muestran solo si el archivo existe ----------
     Si falta el .jpg, queda visible el marcador de posición con el nombre esperado. */
  function revisarImagenes() {
    document.querySelectorAll('.shot img').forEach(function (img) {
      var figura = img.closest('.shot');
      function marcar() {
        if (img.naturalWidth > 0) {
          figura.classList.add('has-img');
          figura.style.setProperty('--ar', img.naturalWidth + ' / ' + img.naturalHeight);
        }
      }
      if (img.complete) { marcar(); } else { img.addEventListener('load', marcar); }
    });
  }

  /* ---------- 2. Exportar a PDF ---------- */
  function exportarPDF() {
    // Espera a que carguen las fuentes web para que el PDF salga con la tipografía correcta
    var listo = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
    listo.then(function () { window.print(); });
  }

  btnPdf.addEventListener('click', exportarPDF);
  revisarImagenes();
})();
