// esta funcion se va a ejecutar cuando se termine de cargar el sitio
//para eso el $
// $(function(){
//     //agarrar todos los elementos datatoggle
//     $('[data-bs-toggle="tooltip"]').tooltip()
//     //a todos los elementos con tooltip se le apluica la funcion 
//     //tooltip de bootstrap a jquery de bootsrap
// })

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})