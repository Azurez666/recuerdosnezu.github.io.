const abrir = document.getElementById("abrirGaleria");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");
const imagenModal = document.getElementById("imagenModal");

const textoFinal = document.getElementById("textoFinal");
const flecha = document.getElementById("flechaSiguiente");

const textoSuperior = document.getElementById("textoSuperior");
const textoInferior = document.getElementById("textoInferior");

const imagenes = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
    "img7.jpeg"
];

let indice = 0;

/* ===== MAQUINA DE ESCRIBIR ===== */
function escribirTexto(elemento, texto, velocidad = 40) {
    elemento.textContent = "";
    let i = 0;

    function escribir() {
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
            setTimeout(escribir, velocidad);
        }
    }
    escribir();
}

/* TEXTO SUPERIOR AL CARGAR */
window.addEventListener("load", () => {
    escribirTexto(textoSuperior, textoSuperior.dataset.text);
});

/* ABRIR GALERÍA */
abrir.addEventListener("click", () => {
    modal.style.display = "flex";
    indice = 0;
    imagenModal.src = imagenes[indice];
});

/* CERRAR */
cerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

/* CAMBIAR IMÁGENES */
imagenModal.addEventListener("click", () => {
    indice++;

    if (indice >= imagenes.length) {
        modal.style.display = "none";

        textoFinal.style.display = "block";
        escribirTexto(textoInferior, textoInferior.dataset.text);

        flecha.style.display = "block";
        return;
    }

    imagenModal.src = imagenes[indice];
});
