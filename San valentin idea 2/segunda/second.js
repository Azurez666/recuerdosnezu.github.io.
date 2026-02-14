// ================= TYPEWRITER EFFECT =================
const textoCompleto = "Algunas de las cosas que hemos vivido, son un lindo momento que atesoraré,\npor lo emocional ya que sabes que no tengo mucha cabeza,\naun así te recuerdo con mucho amor y cariño";
const textoAnimado = document.getElementById("textoAnimado");
let indiceTexto = 0;
const velocidad = 120; // Increased from 85 to slow down typing further

function escribirTexto() {
    if (indiceTexto < textoCompleto.length) {
        textoAnimado.textContent += textoCompleto[indiceTexto];
        indiceTexto++;
        setTimeout(escribirTexto, velocidad);
    }
}

// Iniciar animación cuando carga la página
window.addEventListener("load", escribirTexto);

// ================= GALERÍA DE IMÁGENES =================
const abrir = document.getElementById("abrirGaleria");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");
const imagenModal = document.getElementById("imagenModal");

const imagenes = ["img1.jpeg", "img2.jpeg", "img3.jpeg"];
let indice = 0;

// Abrir galería
abrir.addEventListener("click", () => {
    modal.style.display = "flex";
    indice = 0;
    imagenModal.src = imagenes[indice];
});

// Cerrar
cerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cambiar imagen al hacer click
imagenModal.addEventListener("click", () => {
    indice++;
    if (indice >= imagenes.length) {
        indice = 0;
    }
    imagenModal.src = imagenes[indice];
});

document.getElementById("btnSiguiente").addEventListener("click", () => {
    window.location.href = "../tercera/tercera.html";
});

