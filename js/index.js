const botonesAgregarCarrito = document.querySelectorAll('.botonAgregarCarrito');
botonesAgregarCarrito.forEach(agregarAlCarrito => {
    agregarAlCarrito.addEventListener('click', agregarAlCarritoClickeado);
});


