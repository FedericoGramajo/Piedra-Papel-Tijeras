const juego =()=>{
     let jPuntaje=0;
     let Puntaje=0;
//Esta funcion inicia el juego cuando das click al 'Jugar!'
     const iniciarJuego = () =>{
         const playBtn = document.querySelector(".intro button");
         const introPantalla = document.querySelector(".intro");
         const partido = document.querySelector(".partido");

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
         const opcionesComputadora = ['roca', 'papel', 'tijera'];
         const numeroComputadora = Math.random() * 3;
         console.log(numeroComputadora);

     }



iniciarJuego();
jugarJuego();
}

juego();
