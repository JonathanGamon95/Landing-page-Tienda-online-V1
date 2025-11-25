// elementos modal
let img_modal = document.getElementById("img_modal");
let modal_titulo = document.getElementById("modal_titulo");
let modal_precio = document.getElementById("modal_precio");
let modal_descripcion = document.getElementById("modal_descripcion");


const modalOverlay = document.querySelector('.modal-overlay');
const botonCerrar = document.querySelector('.modal-cerrar');


// abrir modal
const abrirModal = (producto) => {
    // datos obtenidos
    const imagen = producto.children[0].children[0].getAttribute("src");
    const titulo = producto.children[1].children[0].textContent;
    const detalles = producto.children[1].children[1].textContent;
    const precio = producto.children[1].children[2].textContent;

    // datos aplicados al modal
    img_modal.setAttribute("src", imagen);
    modal_titulo.textContent = titulo;
    modal_precio.textContent = precio;
    modal_descripcion.textContent = detalles;

    modalOverlay.classList.add('activo');
    document.body.style.overflow = 'hidden'; // Evitar scroll en el fondo
}


// Cerrar modal
botonCerrar.addEventListener('click', function () {
    modalOverlay.classList.remove('activo');
    document.body.style.overflow = 'auto'; // Restaurar scroll
});

// Cerrar modal al hacer clic fuera del contenido
modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('activo');
        document.body.style.overflow = 'auto';
    }
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('activo')) {
        modalOverlay.classList.remove('activo');
        document.body.style.overflow = 'auto';
    }
});