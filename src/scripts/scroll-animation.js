// efecto de scroll en menu about

const scrollBoton = (elemento) => {
    const target = document.querySelector(elemento);
    if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY; // Obtiene la posición del elemento
        window.scrollTo({
            top: top,
            behavior: 'smooth' // Desplazamiento suave
        });
    }

    console.log("se ejecuto")
};

// pc
about_button.addEventListener("click", () => {scrollBoton('#about_section');});