/* ---------------- TEXTOS ---------------- */

const introText =
"Creo que esto es casi el final,\n" +
"te dejo mi ultimo pequeño\n" +
"detalle mas de esta pagina,\n" +
"Te amo ♥";

const letterContent =
"Feliz san valentin cariño,\n" +
"este fue uno de los regalos\n" +
"que prepare darte (el fisicio\n" +
"te lo dare la prox que nos\n" +
"veamos) algo que me llevo\n" +
"dos semanas y media en\n" +
"realizar, muchas gracias por\n" +
"ser mi primer san valentin,\n" +
"moriria por querer saber si\n" +
"te gusto o no";

/* ---------------- ELEMENTOS ---------------- */

const typedText = document.getElementById("typedText");
const letterText = document.getElementById("letterText");
const letterIcon = document.getElementById("openLetter");
const modal = document.getElementById("letterModal");

const musica = document.getElementById("musicaFondo");
const voz = document.getElementById("vozDedicatoria");

let i = 0;
let j = 0;

let musicaVolumenNormal = 0.5;
let escribiendoCarta = false;

/* ---------------- MAQUINA DE ESCRIBIR INTRO ---------------- */

function typeIntro() {
    if (i < introText.length) {
        typedText.innerHTML += introText.charAt(i);
        i++;
        setTimeout(typeIntro, 55);
    } else {
        setTimeout(() => {
            letterIcon.classList.add("show");
        }, 800);
    }
}

typeIntro();

/* ---------------- MAQUINA DE ESCRIBIR CARTA ---------------- */

function typeLetter() {
    if (j < letterContent.length && escribiendoCarta) {
        letterText.innerHTML += letterContent.charAt(j);
        j++;
        setTimeout(typeLetter, 45);
    }
}

/* ---------------- CONTROL MUSICA ---------------- */

function bajarMusica() {
    let fade = setInterval(() => {
        if (musica.volume > 0.15) {
            musica.volume -= 0.02;
        } else {
            clearInterval(fade);
        }
    }, 60);
}

function subirMusica() {
    let fade = setInterval(() => {
        if (musica.volume < musicaVolumenNormal) {
            musica.volume += 0.02;
        } else {
            clearInterval(fade);
        }
    }, 60);
}

/* ---------------- ABRIR CARTA ---------------- */

letterIcon.addEventListener("click", () => {
    modal.classList.add("show");

    /* Reiniciar texto */
    letterText.innerHTML = "";
    j = 0;
    escribiendoCarta = true;

    typeLetter();

    /* Audio */
    bajarMusica();
    voz.currentTime = 0;
    voz.play();
});

/* ---------------- CERRAR CARTA ---------------- */

modal.addEventListener("click", () => {
    modal.classList.remove("show");

    /* Detener animación */
    escribiendoCarta = false;

    /* Detener voz */
    voz.pause();
    voz.currentTime = 0;

    /* Restaurar música */
    subirMusica();
});

/* ---------------- INICIAR MUSICA CON INTERACCION ---------------- */

document.addEventListener("click", function () {
    musica.volume = musicaVolumenNormal;
    musica.play();
}, { once: true });

/* ---------------- CUANDO TERMINA LA VOZ ---------------- */

voz.addEventListener("ended", () => {
    subirMusica();
});
