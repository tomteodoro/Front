const API = 'https://jsonplaceholder.typicode.com/users';
const listEl = document.getElementById('list');
const statusEl = document.getElementById('status');
const searchInput = document.getElementById('search');
const refreshBtn = document.getElementById('refresh');
const locateBtn = document.getElementById('locate');
const coordsEl = document.getElementById('coords');
const formModalEl = document.getElementById('formModal');
const bsModal = new bootstrap.Modal(formModalEl);
const openFormBtn = document.getElementById('openForm');
const closeFormBtn = document.getElementById('closeForm');
const cancelBtn = document.getElementById('cancel');
const formEl = document.getElementById('form');
const formStatus = document.getElementById('formStatus');
let dataCache = [];
function setStatus(msg, isError=false){
  statusEl.textContent = msg;
  statusEl.className = isError ? 'mb-2 text-danger small' : 'mb-2 text-muted small';
}
async function loadData(){
  setStatus('Carregando prestadores...');
  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error('Resposta não OK');
    const data = await res.json();
    dataCache = data.slice(0, 12).map(u => ({
      id: u.id,
      nome: u.name,
      profissao: u.company.bs,
      email: u.email,
      telefone: u.phone,
      descricao: u.company.catchPhrase
    }));
    render(dataCache);
    setStatus(`Encontrados ${dataCache.length} prestadores.`);
    cacheResponse(API, JSON.stringify(data));
  } catch (err) {
    console.warn('Erro ao buscar dados:', err);
    try {
      const cached = await caches.match(API);
      if (cached) {
        const txt = await cached.text();
        const data = JSON.parse(txt);
        dataCache = data.slice(0,12).map(u => ({
          id: u.id,
          nome: u.name,
          profissao: u.company.bs,
          email: u.email,
          telefone: u.phone,
          descricao: u.company.catchPhrase
        }));
        render(dataCache);
        setStatus('Carregando dados do cache (modo offline).');
      } else {
        setStatus('Erro ao carregar dados e nenhum cache disponível.', true);
      }
    } catch(e){
      setStatus('Erro ao recuperar cache.', true);
    }
  }
}
function render(list){
  listEl.innerHTML = '';
  if (!list || list.length === 0) {
    listEl.innerHTML = '<div class="col-12"><p class="text-muted">Nenhum prestador encontrado.</p></div>';
    return;
  }
  list.forEach(s => {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4';
    col.setAttribute('role','listitem');
    col.innerHTML = `
      <article class="card h-100" tabindex="0" aria-label="Prestador ${escapeHtml(s.nome)}">
        <div class="card-body">
          <h5 class="card-title">${escapeHtml(s.nome)}</h5>
          <p class="card-text text-muted">${escapeHtml(s.profissao)}</p>
          <p class="small mb-1">${escapeHtml(s.descricao)}</p>
          <p class="mb-1"><a href="mailto:${encodeURIComponent(s.email)}" aria-label="Enviar e-mail para ${escapeHtml(s.nome)}">${escapeHtml(s.email)}</a></p>
          <p class="mb-2">${escapeHtml(s.telefone)}</p>
        </div>
      </article>
    `;
    listEl.appendChild(col);
  });
}
function escapeHtml(text=''){
  return String(text).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
}
searchInput.addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = dataCache.filter(item => (item.nome + ' ' + item.profissao).toLowerCase().includes(q));
  render(filtered);
});
refreshBtn.addEventListener('click', loadData);
locateBtn.addEventListener('click', () => {
  coordsEl.textContent = 'Obtendo localização...';
  if (!('geolocation' in navigator)) {
    coordsEl.textContent = 'Geolocalização não suportada';
    return;
  }
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude, longitude } = pos.coords;
    coordsEl.innerHTML = `Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)} — <a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank" rel="noopener">Abrir no Maps</a>`;
  }, err => {
    coordsEl.textContent = 'Erro ao obter localização: ' + err.message;
  }, { timeout: 10000 });
});
openFormBtn.addEventListener('click', () => {
  bsModal.show();
  openFormBtn.setAttribute('aria-expanded','true');
});
closeFormBtn.addEventListener('click', () => bsModal.hide());
cancelBtn.addEventListener('click', () => bsModal.hide());
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const service = document.getElementById('service').value.trim();
  const email = document.getElementById('email').value.trim();
  if (!name || !service) {
    formStatus.textContent = 'Preencha os campos obrigatórios.';
    formStatus.className = 'text-danger';
    return;
  }
  const newItem = { id: Date.now(), nome: name, profissao: service, email: email||'—', telefone:'—', descricao:'' };
  dataCache.unshift(newItem);
  render(dataCache);
  formStatus.textContent = 'Obrigado! Cadastro recebido.';
  formStatus.className = 'text-success';
  setTimeout(() => {
    bsModal.hide();
    formStatus.textContent = '';
    formEl.reset();
  }, 900);
});
async function cacheResponse(url, bodyText){
  try {
    const cache = await caches.open('dynamic-v1');
    await cache.put(url, new Response(bodyText, { headers: { 'Content-Type': 'application/json' } }));
  } catch(err){ console.warn('Erro ao cachear:', err); }
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker registrado'))
    .catch(err => console.warn('Erro ao registrar SW', err));
}
window.addEventListener('load', () => {
  loadData();
});
