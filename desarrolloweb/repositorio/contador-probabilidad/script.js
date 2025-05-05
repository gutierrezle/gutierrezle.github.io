let intentos = 0;
let aciertos = 0;
let mejorScore = localStorage.getItem("mejorScore") || 0;

document.getElementById("mejorScore").innerText = mejorScore;

document.getElementById("intentarBtn").addEventListener("click", () => {
  intentos++;
  const probabilidad = calcularProbabilidad(intentos);
  const exito = Math.random() < probabilidad;

  if (exito) {
    aciertos++;
    mostrarMensaje("¡Éxito!", true);
    actualizarUI(intentos, aciertos, probabilidad);
  } else {
    mostrarMensaje("Fallaste 😢", false);
    if (aciertos > mejorScore) {
      mejorScore = aciertos;
      localStorage.setItem("mejorScore", mejorScore);
      document.getElementById("mejorScore").innerText = mejorScore;
    }
    setTimeout(() => {
      alert(`¡Fallaste! Tu racha fue de ${aciertos} aciertos.\nMejor racha: ${mejorScore}`);
      reiniciar();
    }, 100);
  }
});

function calcularProbabilidad(n) {
  if (n <= 4) return 1;
  if (n <= 10) return 0.9;
  if (n <= 20) return 0.8;
  if (n <= 30) return 0.7;
  if (n <= 40) return 0.6;
  if (n <= 50) return 0.5;
  if (n <= 90) return 0.4;
  if (n <= 100) return 0.3;
  if (n <= 500) return 0.2;
  if (n <= 1000) return 0.1;
  if (n < 1000) return 0.09;
  return 0.01;
}

function actualizarUI(intentos, aciertos, probabilidad) {
  document.getElementById("intentos").innerText = intentos;
  document.getElementById("aciertos").innerText = aciertos;
  document.getElementById("probabilidad").innerText = `${Math.round(probabilidad * 100)}%`;
}

function mostrarMensaje(mensaje, exito) {
  const div = document.getElementById("resultado");
  div.textContent = mensaje;
  div.className = exito ? "mensaje success" : "mensaje fail";
}

function reiniciar() {
  intentos = 0;
  aciertos = 0;
  actualizarUI(intentos, aciertos, calcularProbabilidad(0));
  mostrarMensaje("Juego reiniciado. ¡Probá de nuevo!", false);
}
