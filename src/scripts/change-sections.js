// aca se cambia de seccion del menu

// botones
const home_button = document.getElementById("home");
const about_button = document.getElementById("about");
const faq_button = document.getElementById("faq");
const contact_button = document.getElementById("contact");

// botones mobile

const about_button_mobile = document.getElementById("faq_mobile");

// secciones
const container_section = document.getElementById("container_section");
const home_section = document.getElementById("home_section");
const products = document.getElementById("products_section");
const questions_section = document.getElementById("questions_section");
const contact_section = document.getElementById("contact_section");

function changeSections(buttonSelected) {

    if (!buttonSelected.classList.contains("hidden")) {
        return;
    } else {
        // se oculta el contenedor padre
        container_section.classList.remove('opacity-100');
        container_section.classList.add("opacity-0");
        // se desactiva los botones
        home_button.disabled = true;
        about_button.disabled = true;
        faq_button.disabled = true;
        contact_button.disabled = true;
        console.log("cambio 1 correctamente");
    }



    setTimeout(() => {
        // se ocultan todas las secciones
        products.classList.add("hidden");
        home_section.classList.add("hidden");
        questions_section.classList.add("hidden");
        contact_section.classList.add("hidden");
        // se visibiliza la seccion seleccionada
        buttonSelected.classList.remove("hidden");
        // se visibiliza la ventana general
        container_section.classList.remove("opacity-0");
        container_section.classList.add("opacity-100");
        // se activa los botones
        home_button.disabled = false;
        about_button.disabled = false;
        faq_button.disabled = false;
        contact_button.disabled = false;
        console.log("cambio 2 correctamente")
    }, 1000)
}