/* 
  Workshop: Introducción a JavaScript
  Por: Ada ITW 'Empoderamos mujeres a través de la tecnología'
  Fecha: 26/05/2020
*/

// Puntaje final del Usuario y Computadora
let puntajesUsuaria = document.querySelector(".puntaje-usuaria p");
let puntajesComputadora = document.querySelector(".puntaje-computadora p")

// Variables para almacenar el puntaje del Usuario y Computadora por ronda
let puntosUsuaria = 0;
let puntosComputadora = 0;

// Variables para almacenar la elección del Usuario y Computadora
let eleccionComputadora = "";
let eleccionUsuaria = "";

// Se obtienen los elementos mediante sus clases
let botonPiedra = document.querySelector(".piedra");
let botonPapel = document.querySelector(".papel")
let botonTijera = document.querySelector(".tijera")

// Mensaje de resultado
let resultadoTexto = document.querySelector(".resultado")

// Se obtienen los elementos mediante sus clases
let manoUsuaria = document.querySelector(".mano-usuaria")
let manoComputadora = document.querySelector(".mano-computadora")
let tablero = document.querySelector(".tablero")

// Método 'Piedra'
botonPiedra.onclick = () => {
  resultadoTexto.textContent = "🤨"
  manoComputadora.src = "./assets/piedra_computadora.png"
  manoUsuaria.src = "./assets/piedra_ada.png"
  tablero.classList.add("jugando");
  setTimeout(() => {
    tablero.classList.remove("jugando")
    eleccionUsuaria = "piedra";
    manoUsuaria.src = "./assets/piedra_ada.png"
    obtenerEleccionComputadora();
    decidirPuntaje();
  }, 2000)
}

// Método 'Papel'
botonPapel.onclick = () => {
  resultadoTexto.textContent = "🤨"
  manoComputadora.src = "./assets/piedra_computadora.png"
  manoUsuaria.src = "./assets/piedra_ada.png"
  tablero.classList.add("jugando");
  setTimeout(() => {
    tablero.classList.remove("jugando")
    eleccionUsuaria = "papel";
    manoUsuaria.src = "./assets/papel_ada.png"
    obtenerEleccionComputadora();
    decidirPuntaje();
  }, 2000)
}

// Método 'Tijeras'
botonTijera.onclick = () => {
  resultadoTexto.textContent = "🤨"
  manoComputadora.src = "./assets/piedra_computadora.png"
  manoUsuaria.src = "./assets/piedra_ada.png"
  tablero.classList.add("jugando");
  setTimeout(() => {
    tablero.classList.remove("jugando")
    eleccionUsuaria = "tijera";
    manoUsuaria.src = "./assets/tijera_ada.png"
    obtenerEleccionComputadora();
    decidirPuntaje();
  }, 2000)
}

// Se obtiene elección de la computadora de manera aleatoria
const obtenerEleccionComputadora = () => {
  let numeroAlAzar = Math.floor(Math.random() * 3) 
  if (numeroAlAzar == 0) {
    eleccionComputadora = "piedra"
    manoComputadora.src = "./assets/piedra_computadora.png"
  }
  else if (numeroAlAzar == 1) {
    eleccionComputadora = "papel"
    manoComputadora.src = "./assets/papel_computadora.png"
  }
  else {
    eleccionComputadora = "tijera"
    manoComputadora.src = "./assets/tijera_computadora.png"
  }
}

// Se evaluan elecciones del Usuario y de la Computadora para decidir el puntaje
const decidirPuntaje = () => {
  if (eleccionComputadora == "piedra") {
    if (eleccionUsuaria == "piedra") {
    resultadoTexto.textContent = "Empate 🙄"
    }
    else if (eleccionUsuaria == "papel") {
      resultadoTexto.textContent = "¡Ganaste 🍻!"
      puntosUsuaria++
      puntajesUsuaria.textContent = puntosUsuaria;
    }
    else {
      puntosComputadora++
      puntajesComputadora.textContent = puntosComputadora;
      resultadoTexto.textContent = "Perdiste 💩"
    }
  }
  else if (eleccionComputadora == "papel") {
    if (eleccionUsuaria == "papel") {
    resultadoTexto.textContent = "Empate 🙄"
    }
    else if (eleccionUsuaria == "tijera") {
      resultadoTexto.textContent = "¡Ganaste 🍻!"
      puntosUsuaria++
      puntajesUsuaria.textContent = puntosUsuaria;
    }
    else {
      puntosComputadora++
      puntajesComputadora.textContent = puntosComputadora;
      resultadoTexto.textContent = "Perdiste 💩"
    }
  }
    else if (eleccionComputadora == "tijera") {
      if (eleccionUsuaria == "tijera") {
      resultadoTexto.textContent = "Empate 🙄"
      }
      else if (eleccionUsuaria == "piedra") {
        resultadoTexto.textContent = "¡Ganaste 🍻!"
        puntosUsuaria++
        puntajesUsuaria.textContent = puntosUsuaria;
      }
      else {
        puntosComputadora++
        puntajesComputadora.textContent = puntosComputadora;
        resultadoTexto.textContent = "Perdiste 💩"
      }
  }
}
