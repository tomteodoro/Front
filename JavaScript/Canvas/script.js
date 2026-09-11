const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

//Definições
contexto.lineWidth = 14;
contexto.lineCap = "round";
contexto.lineJoin = "round";

// Cabeça
contexto.beginPath();
contexto.arc(425, 298, 43, 0, Math.PI * 2);
contexto.stroke();

// Corpo
contexto.beginPath();
contexto.moveTo(417, 340);
contexto.lineTo(417, 466);
contexto.stroke();

// Braço esquerdo
contexto.beginPath();
contexto.moveTo(415, 342);
contexto.lineTo(350, 397);
contexto.lineTo(432, 429);
contexto.stroke();

// Braço direito
contexto.beginPath();
contexto.moveTo(425, 343);
contexto.lineTo(476, 398);
contexto.lineTo(545, 336);
contexto.stroke();

// Perna esquerda
contexto.beginPath();
contexto.moveTo(417, 467);
contexto.lineTo(340, 548);
contexto.lineTo(338, 657);
contexto.stroke();

// Perna direita
contexto.beginPath();
contexto.moveTo(417, 467);
contexto.lineTo(489, 548);
contexto.lineTo(490, 657);
contexto.stroke();
