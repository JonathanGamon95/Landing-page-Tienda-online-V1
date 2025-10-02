const menu = document.getElementById('menu');

function abrirMenu() {
    menu.classList.add('open');
}

function cerrarMenu() {
    menu.classList.remove('open');
}

// scroll inicio
const scrollInicio = () => {
    window.scrollTo({
        top: 0, // Desplazarse al principio de la página
        behavior: 'smooth' // Desplazamiento suave
    });
};