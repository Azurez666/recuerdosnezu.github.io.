const text = document.getElementById("dialogText");
const box = document.getElementById("dialogBox");
const next = document.getElementById("nextBtn");
const ask = document.getElementById("askBtn");
const finalArrow = document.getElementById("finalArrow");

/* Estados de la escena */
let state = 0;

/* Máquina de escribir */
function typeWriter(message, callback){
    text.innerHTML="";
    let i=0;
    const speed=100; // Increased from 35 to slow down typing

    function write(){
        if(i<message.length){
            text.innerHTML += message.charAt(i);
            i++;
            setTimeout(write,speed);
        }else{
            if(callback) callback();
        }
    }
    write();
}

/* INICIO */
box.classList.remove("hidden");

typeWriter(
"Siempre me eh sentido sola en este mundo... vivi con ese vacio cronico toda mi vida, pero tu compañia para mi lo es todo, me da paz",
()=>{
    next.classList.remove("hidden");
});

/* Flecha ➤ */
next.onclick = ()=>{
    next.classList.add("hidden");

    typeWriter(
"siempre estoy agradecida por lo que eres y quien eres, quiero que me elijas",
()=>{
        state = 1;
        ask.classList.remove("hidden");
    });
};

/* BOTÓN PREGUNTAR */
ask.onclick = ()=>{

    /* PRIMERA PREGUNTA */
    if(state === 1){

        ask.classList.add("hidden");

        typeWriter(
"Si preguntas por mi amor, si, te amo con toda mi alma, Si te amo con todo mi ser y en cada instante de mis dias",
()=>{
            state = 2;

            setTimeout(()=>{
                ask.classList.remove("hidden");
            },800);
        });
    }

    /* SEGUNDA PREGUNTA */
    else if(state === 2){

        ask.classList.add("hidden");

        typeWriter(
"Siempre viviré y moriré por ti, mis dias son tuyos y yo vivo para servirte.",
()=>{
            state = 3;

            /* DESAPARECE TODO */
            setTimeout(()=>{
                box.classList.add("hidden");

                /* PAUSA DE 3 SEGUNDOS */
                setTimeout(()=>{

                    box.classList.remove("hidden");

                    typeWriter(
"te dije lo tonto que es la palabra zapato??",
()=>{
                        finalArrow.classList.remove("hidden");
                    });

                },3000);

            },1200);
        });
    }
};