const mensaje = `Me faltan palabras para describir
porque eres importante para mi...

Me perdería viéndote en una noche estrellada...
De tantos lugares, de tanta distancia,
me escogiste a mi y estoy agradecida por eso.`;

let i = 0;
const velocidad = 150; // Increased from 100 to slow down typing further
const textoElemento = document.getElementById("texto");

function escribir() {
    if (i < mensaje.length) {
        textoElemento.innerHTML += mensaje.charAt(i);
        i++;
        setTimeout(escribir, velocidad);
    }
}

window.onload = escribir;
