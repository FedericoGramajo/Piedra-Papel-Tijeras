const juego =()=>{
     let jPuntaje=0;
     let cPuntaje=0;
//Esta funcion inicia el juego cuando das click al 'Jugar!'
     const iniciarJuego = () =>{
         const playBtn = document.querySelector(".intro button");
         const introPantalla = document.querySelector(".intro");
         const partido = document.querySelector(".partido");
         const manos = document.querySelectorAll(".manos img");

         manos.forEach(manos =>{
             manos.addEventListener('animationend', function(){
                 this.style.animation="";
             })
         });

         playBtn.addEventListener("click", () =>{
             introPantalla.classList.add("fadeOut");
             partido.classList.add("fadeIn");
         })
     }

     //Jugar la partida
     const jugarJuego = () =>{
         const opciones  = document.querySelectorAll(".opciones button");
         const manoJugador = document.querySelector(".mano-jugador");
         const manoComputadora = document.querySelector(".mano-computadora"); 

         //Opciones de la computador
         const opcionesComputadora = ['piedra', 'papel', 'tijeras'];

         opciones.forEach(opciones =>{
            opciones.addEventListener("click", function(){

        //Saco un numero random para despues buscarlo en el array opcionesComputadora
         const numeroComputadora = Math.floor(Math.random() * 3);
         const computadoraEleccion = opcionesComputadora[numeroComputadora];

         setTimeout(() =>{
             
          compararManos(this.textContent.toLowerCase(), computadoraEleccion);

          //Pone las imagenes que elgimos
         manoJugador.src = `Imagenes/${this.textContent}.png`;
         manoComputadora.src = `Imagenes/${computadoraEleccion}.png`;

         },2000)

         manoJugador.style.animation = "sacudirJugador 2s ease";
         manoComputadora.style.animation = "sacudirComputadora 2s ease";
            })
        })

     }

     const actualizarPuntaje = () =>{
        const puntajeJugador = document.querySelector(".puntaje-jugador p")
        const puntajeComputadora = document.querySelector(".puntaje-computadora p")

        puntajeJugador.textContent=jPuntaje;
        puntajeComputadora.textContent=cPuntaje;
    }

const compararManos = (eleccionJugador, eleccionComputadora)  =>{
    const ganador =document.querySelector(".ganador");

    if(eleccionJugador===eleccionComputadora){
        ganador.textContent= "Es un Empate";
        return;
    }

    if(eleccionJugador==="piedra"){
        if (eleccionComputadora === "tijeras"){
            ganador.textContent = "Ganaste";
            jPuntaje++;
            actualizarPuntaje();
            return;
        } else {
            ganador.textContent = "Perdiste, la Computadora te ganó ):";
            cPuntaje++;
            actualizarPuntaje();
            return;
        }

    }

    if(eleccionJugador === "papel"){
        if (eleccionComputadora === "piedra"){
            ganador.textContent = "Ganaste";
            jPuntaje++;
            actualizarPuntaje();
            return;
        } else {
            ganador.textContent = "Perdiste, la Computadora te ganó ):";
            cPuntaje++;
            actualizarPuntaje();
            return;
        }

    }

    if(eleccionJugador==="tijeras"){
        if (eleccionComputadora === "papel"){
            ganador.textContent = "Ganaste";
            jPuntaje++;
            actualizarPuntaje();
            return;
        } else {
            ganador.textContent = "Perdiste, la Computadora te ganó ):";
            cPuntaje++;
            actualizarPuntaje();
            return;
        }

    }
}

iniciarJuego();
jugarJuego();
}


juego();
