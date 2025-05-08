// Por ahora vacío. Más adelante puedes agregar animaciones, comandos, efectos tipo terminal, etc.
console.log("CyberNotebook cargado.");
window.addEventListener("load", () => {
    const skull = document.getElementById("skull-screen");
    setTimeout(() => {
      skull.remove();
    }, 6000); // Se borra después de 6 segundos
  });
  
  window.addEventListener("load", () => {
    const skull = document.getElementById("skull-screen");
    const audio = new Audio("assets/audio/glitch.mp3");
    audio.play();
  
    setTimeout(() => {
      skull.remove();
    }, 6000);
  });
  