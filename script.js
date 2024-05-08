function toggleContent(button) {
    var content = button.nextElementSibling;
    content.style.display = (content.style.display === 'none') ? 'block' : 'none';
}

function stopFlash(element){
	element.style.animation = "none";
}


function mostrarPDF(ruta) {
  // Obtiene el iframe
  var iframe = document.getElementById('pdfIframe');
  // Cambia el src del iframe
  iframe.src = ruta;
  // Muestra el iframe
  iframe.style.display = 'block';
}