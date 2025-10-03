// Drag and Drop
const draggables = document.querySelectorAll('.draggable');
const dropzone = document.getElementById('badge');

draggables.forEach(el => {
  el.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.id);
  });
});

dropzone.addEventListener('dragover', e => {
  e.preventDefault();
});

dropzone.addEventListener('drop', e => {
  e.preventDefault();
  const id = e.dataTransfer.getData('text');
  const element = document.getElementById(id);
  dropzone.appendChild(element);
});

// Câmera e Captura de Imagem
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const photoImg = document.getElementById('photoImg');

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error('Erro ao acessar a câmera:', err);
  });

document.getElementById('capture').addEventListener('click', () => {
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imageDataURL = canvas.toDataURL();
  photoImg.src = imageDataURL;
});

// Geolocalização
function getLocation() {
  const locationEl = document.getElementById('location');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude.toFixed(5);
        const lon = position.coords.longitude.toFixed(5);
        locationEl.textContent = `Lat: ${lat}, Lon: ${lon}`;
      },
      err => {
        locationEl.textContent = 'Erro ao obter localização';
      }
    );
  } else {
    locationEl.textContent = 'Geolocalização não suportada';
  }
}

// Nome personalizado
const nameInput = document.getElementById('nameInput');
const nameDisplay = document.getElementById('name');
nameInput.addEventListener('input', () => {
  nameDisplay.textContent = nameInput.value || '[Seu Nome]';
});
