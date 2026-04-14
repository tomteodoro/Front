// CONTADOR ANIMADO
function animateValue(id, start, end, duration) {
  let obj = document.getElementById(id);
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));

  let timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) clearInterval(timer);
  }, stepTime);
}

animateValue("users", 0, 1200, 2000);
animateValue("sales", 0, 530, 2000);
animateValue("performance", 0, 87, 2000);

// TEMA
function toggleTheme() {
  document.body.classList.toggle("light");
}

// GRÁFICO SIMPLES
const canvas = document.getElementById("chartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 200;

let data = Array.from({length: 20}, () => Math.random() * 100);

function drawChart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - data[0]);

  data.forEach((value, i) => {
    ctx.lineTo(i * 30, canvas.height - value);
  });

  ctx.strokeStyle = "#00f2fe";
  ctx.lineWidth = 3;
  ctx.stroke();
}

setInterval(() => {
  data.shift();
  data.push(Math.random() * 100);
  drawChart();
}, 500);

drawChart();

// FUNDO DE PARTÍCULAS
const bg = document.getElementById("bg");
const btx = bg.getContext("2d");

bg.width = window.innerWidth;
bg.height = window.innerHeight;

let particles = Array.from({length: 80}, () => ({
  x: Math.random() * bg.width,
  y: Math.random() * bg.height,
  r: Math.random() * 2,
  dx: Math.random() - 0.5,
  dy: Math.random() - 0.5
}));

function animateParticles() {
  btx.clearRect(0, 0, bg.width, bg.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > bg.width) p.dx *= -1;
    if (p.y < 0 || p.y > bg.height) p.dy *= -1;

    btx.beginPath();
    btx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    btx.fillStyle = "rgba(0,242,254,0.7)";
    btx.fill();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();