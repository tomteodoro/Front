//Definir
const textosImg = document.querySelectorAll('[id^="texto_imagem"]');
const textosFooter = document.querySelectorAll('[id^="texto_footer"]');
const imagens = document.querySelectorAll('.item img');
const botaoCoresTextos = document.getElementById('botao_cores_textos');
const botaoImagens = document.getElementById('botao_imagem');
const botaoLayout = document.getElementById('botao_layout');
const grid = document.querySelector('.grid');
const botaoReset = document.getElementById('botao_reset');
const textoDescricao = document.getElementById('texto_descricao');


//Definir Novos dados
const novosTextosImagens = [
    'Pinguim LOUCO',
    'Pinguim Maniaco',
    'Pinguim Jedi',
    'Pinguim Instalador'
];

const novosTextosDescricao = [
    'Bem-vindo à seção de descrição! Aproveite o conteúdo atualizado.',
];

const novasImagens = [
    'pinguim-louco.jpg',
    'pinguim-maniaco.jpg',
    'pinguim-jedi.jpg',
    'pinguim-instalador.webp'
];

//Resetar a pagina
botaoReset.addEventListener('click', () => {
    location.reload();
});

//Alterar Cores e Texto
botaoCoresTextos.addEventListener('click', () => {
    console.log('Botão de cores clicado');

    document.body.style.backgroundColor = '#e0f7fa';

    textosFooter[0].innerText = 'Rodapé Modificado 1';
    textosFooter[1].innerText = 'Rodapé Modificado 2';
    textosFooter[2].innerText = 'Rodapé Modificado 3';

    textoDescricao.innerText = novosTextosDescricao[0];


    textosFooter.forEach((texto) => {
        texto.style.color = '#004d40';
    });

    document.documentElement.style.setProperty('--primary-color', '#00796b');
    document.documentElement.style.setProperty('--secondary-color', '#b2dfdb');
    document.documentElement.style.setProperty('--highlight-color', '#004d40');
});

//Alterar Imagens
botaoImagens.addEventListener('click', () => {
    console.log('Botão de imagens clicado');
    imagens.forEach((img, index) => {
        img.src = novasImagens[index];
        img.alt = novosTextosImagens[index];
    });

    textosImg[0].innerText = novosTextosImagens[0];
    textosImg[1].innerText = novosTextosImagens[1];
    textosImg[2].innerText = novosTextosImagens[2];
    textosImg[3].innerText = novosTextosImagens[3];

});


//Alterar Layout
let layoutAlternado = false;

botaoLayout.addEventListener('click', () => {
    console.log('Botão de layout clicado');
    if (!layoutAlternado) {
        grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
        grid.style.gap = '20px';
    } else {
        grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
        grid.style.gap = '30px';
    }

    layoutAlternado = !layoutAlternado;
});
