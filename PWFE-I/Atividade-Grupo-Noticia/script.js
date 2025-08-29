const noticias = [
    {
        titulo: "Inverno Amazônico: região Norte sai de seca histórica para enchentes em menos de 6 meses",
        resumo: "Alagamentos são comuns nessa época do ano na região, mas especialistas alertam que oscilações vêm se tornando cada vez mais extremas e frequentes.",
        imagem: "https://s2-g1.glbimg.com/csS-KQhQu9lpPkzPY9o2OGhCwbc=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/u/8/GCRNIjQD6dki2R0Q9uHg/hum-cenas-aereas-drone-cheia-boca-do-acre.mp4.00-13-02-06.still001.jpg",
        link: "https://g1.globo.com/ro/rondonia/noticia/2025/04/07/inverno-amazonico-regiao-norte-sai-de-seca-historica-para-enchentes-em-menos-de-6-meses.ghtml"
    },
    {
        titulo: "Vídeo mostra agressão de professor a criança autista em escola do Rio; mãe diz que filho ainda lida com o trauma. ",
        resumo: "Caso aconteceu em 2024, mas mãe só teve acesso às imagens da agressão seis meses depois. A legislação brasileira garante a crianças autistas — de escolas públicas e privadas — o direito a um acompanhante em sala de aula.",
        imagem: "https://s2-g1.glbimg.com/MgS8L_1fQHrl2GJZMLDeE7FAFyc=/0x0:963x533/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/g/p/lF20eYQ3OSfb6yRx3LQA/0604-fant-agressao.jpg",
        link: "https://g1.globo.com/fantastico/noticia/2025/04/06/video-mostra-agressao-de-professor-a-crianca-autista-em-escola-do-rio-mae-diz-que-filho-ainda-lida-com-o-trauma.ghtml "
    },
    {
        titulo: "A vida dupla do juiz que falsificou documentos e inventou ser descendente de lordes ingleses",
        resumo: "A polícia afirma que José Eduardo construiu uma vida de mentiras. Como Edward, discreto e convincente, enganou instituições, colegas e o Estado, que lhe deu cargo, salário e poder.",
        imagem: "https://s2-g1.glbimg.com/fx93b7i2g9apWKFKpqxzKdcIE7M=/0x0:960x529/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/a/S/M1GgbOR8CixLmmfoRiMQ/0604-fant-juiz.jpg",
        link: "https://g1.globo.com/fantastico/noticia/2025/04/06/a-vida-dupla-do-juiz-que-falsificou-documentos-e-inventou-ser-descendente-de-lordes-ingleses.ghtml"
    },
    {
        titulo: "Acidente no Morro dos Cavalos: BR-101 é liberada após caminhão tombar, explodir e incendiar veículos em SC ",
        resumo: "Chamas atingiram mais de 20 veículos que trafegavam no local. Cinco pessoas se feriram.",
        imagem: "https://s2-g1.glbimg.com/7j3ZbbnWbNrCEP04cr8-c8fMhBg=/0x0:1267x714/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/k/C/jTnzAHSoW8xx4m4XoFKw/thumbnail-image.png",
        link: "https://g1.globo.com/sc/santa-catarina/noticia/2025/04/07/br-101-palhoca-liberada-incendio-explosao-sc.ghtml"
    },
    {
        titulo: "Polícia analisa câmeras para identificar vândalo que quebrou estátuas de santos em igreja na Zona Leste de SP",
        resumo: "Ataque foi na manhã de domingo (6) em paróquia no Jardim das Oliveiras, região do Itaim Paulista. Pároco lamentou vandalismo e chamou de 'ato insano contra as imagens sagradas'.",
        imagem: "https://s2-g1.glbimg.com/BG1KqzXwsW54nLN5uQdYGoudUGQ=/0x0:1060x600/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/Y/L/4fhsbSQcaYXMkAbmr0oA/174402202421916.jpg",
        link: "https://g1.globo.com/sp/sao-paulo/noticia/2025/04/07/policia-analisa-imagens-de-paroquia-na-zona-leste-para-identificar-vandalo-que-quebrou-imagens-de-santos-no-intervalo-das-missas-em-sp.ghtml"
    },
    {
        titulo: "Japonês que gastou R$ 75 mil em fantasia de cachorro faz seu primeiro passeio na rua; veja",
        resumo: "Toko-San aparece farejando outros cachorros em um parque. Fantasia demorou 40 dias para ficar pronta, segundo a fabricante da roupa.",
        imagem: "https://s2-g1.glbimg.com/QiWIN-KPBk5JvwUr9-z7tLxocYY=/0x0:776x598/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/b/g/kdvxsPRxqiOmufREKJuA/toco1.jpg",
        link: "https://g1.globo.com/planeta-bizarro/noticia/2023/07/28/japones-que-gastou-r-75-mil-em-fantasia-de-cachorro-faz-seu-primeiro-passeio-na-rua-veja.ghtml"
    },
    {
        titulo: "Madrinha aparece no casamento da irmã fantasiada de tiranossauro nos EUA ",
        resumo: "Ela afirmou que noiva e convidados encararam bem a brincadeira.",
        imagem: "https://s2-g1.glbimg.com/mJQ9CuDWpjUJBIrOJyXEmpBqf0Q=/0x0:1700x916/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/Y/s/Mr56JdSLCpqA9pIpBEIQ/tiranossauro.jpg",
        link: "https://g1.globo.com/planeta-bizarro/noticia/2019/09/04/madrinha-aparece-no-casamento-da-irma-fantasiada-de-tiranossauro-nos-eua.ghtml "
    },
    {
        titulo: "Curiosity encontra moléculas relacionadas à vida em Marte",
        resumo: "O rover Curiosity da NASA encontrou compostos de ácidos graxos em Marte. Eles são compostos orgânicos fundamentais para a estrutura das membranas celulares.",
        imagem: "https://s2-g1.glbimg.com/d6_4nnb-aGdUGPtZaBG29Fy2b5o=/0x0:640x360/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/b/7/BV2rRZTTehZnmBFfZxag/image006-6-.jpg",
        link: "https://g1.globo.com/ciencia/noticia/2025/04/07/curiosity-encontra-moleculas-relacionadas-a-vida-em-marte.ghtml"
    },
    {
        titulo: "'Não seja fraco! Não seja estúpido': Trump diz que EUA estão fazendo algo que já deveria ter sido feito ",
        resumo: "Especialistas avaliam que encarecimento de produtos e serviços deve pressionar a inflação e diminuir o consumo, o que pode provocar uma desaceleração ou até recessão da economia americana.",
        imagem: "https://s2-g1.glbimg.com/abq7dck2HeJQYwTYk3YuoQVkSKo=/0x0:3984x2656/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/y/W/ry72wxSUacVoMzohuJVg/2025-04-01t000840z-6720726-rc2goda1lgz0-rtrmadp-3-usa-trump.jpg",
        link: "https://g1.globo.com/economia/noticia/2025/04/07/nao-seja-fraco-nao-seja-estupido-trump-diz-que-eua-estao-fazendo-algo-que-ja-deveria-ter-sido-feito.ghtml"
    },
];

const container = document.getElementById('noticias-container');

noticias.forEach(noticia => {
  const card = document.createElement('div');
  card.className = 'noticia';
  card.innerHTML = `
    <img src="${noticia.imagem}" alt="Imagem da notícia">
    <h2>${noticia.titulo}</h2>
    <p>${noticia.resumo}</p>
  `;

  card.addEventListener('click', () => {
    abrirPopup(noticia);
  });

  container.appendChild(card);
});

function abrirPopup(noticia) {
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
  
    const popup = document.createElement('div');
    popup.className = 'popup';
  
    popup.innerHTML = `
      <span class="fechar">&times;</span>
      <h2>${noticia.titulo}</h2>
      <iframe src="${noticia.link}" frameborder="0"></iframe>
    `;
  
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  
    // Aplica estilo escuro se estiver ativo
    if (darkModeActive) {
      popup.style.backgroundColor = themeColors.cardBackground;
      popup.style.color = themeColors.text;
  
      const fecharBtn = popup.querySelector('.fechar');
      if (fecharBtn) fecharBtn.style.color = themeColors.text;
    }
  
    // Botão de fechar
    popup.querySelector('.fechar').addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
  }
  

const themeToggle = document.getElementById('theme-toggle');

const themeColors = {
  background: '#1b1f23',         // Fundo geral escuro
  cardBackground: '#24292e',     // Fundo dos cards/notícias
  text: '#d1d1d1',                // Cor dos textos
  buttonBackground: '#2d333b',   // Fundo do botão de tema
  buttonHover: '#444c56',        // Hover do botão
  borderColor: '#3f4448'         // Bordas e detalhes
};

let darkModeActive = false;

// Aplica o tema escuro dinamicamente
function applyDarkMode(colors) {
  document.body.style.backgroundColor = colors.background;
  document.body.style.color = colors.text;

  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  header.style.backgroundColor = colors.cardBackground;
  footer.style.backgroundColor = colors.cardBackground;
  header.style.color = colors.text;
  footer.style.color = colors.text;

  const navLinks = document.querySelectorAll('nav a, p');
  navLinks.forEach(link => {''
    link.style.color = colors.text;
  });

  const noticias = document.querySelectorAll('.noticia');
  noticias.forEach(card => {
    card.style.backgroundColor = colors.cardBackground;
    card.style.color = colors.text;
    card.style.boxShadow = '0 2px 6px rgba(255, 255, 255, 0.05)';
  });

  const popup = document.querySelector('.popup');
  if (popup) {
    popup.style.backgroundColor = colors.cardBackground;
    popup.style.color = colors.text;
  }

  const fechar = document.querySelector('.fechar');
  if (fechar) {
    fechar.style.color = colors.text;
  }

  // Estiliza o botão do tema
  themeToggle.style.backgroundColor = colors.buttonBackground;
  themeToggle.style.color = colors.text;
  themeToggle.style.border = `1px solid ${colors.borderColor}`;
  themeToggle.addEventListener('mouseenter', () => {
    themeToggle.style.backgroundColor = colors.buttonHover;
  });
  themeToggle.addEventListener('mouseleave', () => {
    themeToggle.style.backgroundColor = colors.buttonBackground;
  });
}

// Remove os estilos inline para restaurar o tema claro
function resetStyles() {
  const all = document.querySelectorAll('*');
  all.forEach(el => {
    el.style.backgroundColor = '';
    el.style.color = '';
    el.style.borderColor = '';
    el.style.boxShadow = '';
  });
}

// Aplica tema salvo ao recarregar
if (localStorage.getItem('tema') === 'escuro') {
  darkModeActive = true;
  applyDarkMode(themeColors);
  themeToggle.textContent = '☀️';
} else {
  darkModeActive = false;
  themeToggle.textContent = '🌙';
}

// Alternância de tema ao clicar no botão
themeToggle.addEventListener('click', () => {
  darkModeActive = !darkModeActive;
  if (darkModeActive) {
    applyDarkMode(themeColors);
    localStorage.setItem('tema', 'escuro');
    themeToggle.textContent = '☀️';
  } else {
    resetStyles();
    localStorage.setItem('tema', 'claro');
    themeToggle.textContent = '🌙';
  }
});
