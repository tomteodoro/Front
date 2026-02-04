const themeToggle = document.getElementById('theme-toggle');

const themeColors = {
  background: '#1b1f23',         // Fundo principal escuro
  cardBackground: '#24292e',     // Fundo dos cards
  text: '#e6edf3',                // Texto principal
  buttonBackground: '#2d333b',   // Fundo de botões
  buttonHover: '#444c56',        // Hover dos botões
  borderColor: '#3f4448'         // Bordas sutis
};

let darkModeActive = false;

function applyDarkMode(colors) {
  document.body.style.backgroundColor = colors.background;
  document.body.style.color = colors.text;

  const bgElements = document.querySelectorAll('.text-area, .equipamentos, .footer, .features, .imagem-central, .cta-hero, .image-area, .container');
  bgElements.forEach(el => {
    el.style.backgroundColor = colors.background;
    el.style.color = colors.text;
  });

  const cardElements = document.querySelectorAll('.card, .feature');
  cardElements.forEach(card => {
    card.style.backgroundColor = colors.cardBackground;
    card.style.color = colors.text;
  });

  const texts = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, strong, .card ul, .footer-content, .overlay h1');
  texts.forEach(el => {
    el.style.color = colors.text;
  });

  const buttons = document.querySelectorAll('button, .cta-button button');
  buttons.forEach(btn => {
    btn.style.backgroundColor = colors.buttonBackground;
    btn.style.color = colors.text;
    btn.style.borderColor = colors.borderColor;
    btn.addEventListener('mouseenter', () => {
      btn.style.backgroundColor = colors.buttonHover;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.backgroundColor = colors.buttonBackground;
    });
  });

  const consultor = document.querySelector('.btn-consultor');
  if (consultor) {
    consultor.style.borderColor = colors.text;
    consultor.style.color = colors.text;
    consultor.addEventListener('mouseenter', () => {
      consultor.style.backgroundColor = colors.text;
      consultor.style.color = colors.background;
    });
    consultor.addEventListener('mouseleave', () => {
      consultor.style.backgroundColor = 'transparent';
      consultor.style.color = colors.text;
    });
  }
}

function resetStyles() {
  const all = document.querySelectorAll('*');
  all.forEach(el => {
    el.style.backgroundColor = '';
    el.style.color = '';
    el.style.borderColor = '';
  });
}

themeToggle.addEventListener('click', () => {
  darkModeActive = !darkModeActive;
  if (darkModeActive) {
    applyDarkMode(themeColors);
    themeToggle.textContent = '☀️';
  } else {
    resetStyles();
    themeToggle.textContent = '🌙';
  }
});