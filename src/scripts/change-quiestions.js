// aca se cambia de preguntas en la seccion de preguntas frecuentes

const ordersButton = document.getElementById("orders_button");
const returnButton = document.getElementById("return_button");

const containerQuestionsSection = document.getElementById("container_questions_section");
const orderSection = document.getElementById("orders_section");
const returnSection = document.getElementById("return_section");

// cambia de sección con animación de desvanecimiento
function changeOfSection(selectedSection) {

    if (!selectedSection.classList.contains("hidden")) {
        return;
    } else {
        // se oculta el contenedor padre
        containerQuestionsSection.classList.remove('opacity-100');
        containerQuestionsSection.classList.add("opacity-0");
        // se desactiva los botones
        ordersButton.disabled = true;
        returnButton.disabled = true;
        console.log("cambio 1 correctamente")
    }

    setTimeout(() => {
        // se ocultan todas las secciones
        orderSection.classList.add("hidden");
        returnSection.classList.add("hidden");
        // se visibiliza la seccion seleccionada
        selectedSection.classList.remove("hidden");
        // se visibiliza la ventana general
        containerQuestionsSection.classList.remove("opacity-0");
        containerQuestionsSection.classList.add("opacity-100");
        // se habilita los botones
        ordersButton.disabled = false;
        returnButton.disabled = false;
        console.log("cambio 2 correctamente")
    }, 1000)
}