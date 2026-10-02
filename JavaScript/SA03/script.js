const cidade = document.querySelector("#cidade");
const btnBuscar = document.querySelector("#btnBuscar");
const status = document.querySelector("#status");
const resultado = document.querySelector("#resultado");

// Quando o botão for clicado,
// executa a função buscarEventos.
btnBuscar.addEventListener("click", buscarEventos);

// Também permite pesquisar pressionando Enter.
cidade.addEventListener("keydown", function (evento) {

    if (evento.key === "Enter") {
        buscarEventos();
    }


});

async function buscarEventos() {

    const nomeCidade = cidade.value.trim();


    // Verifica se o campo está vazio.
    if (nomeCidade === "") {

        status.textContent =
            "Digite o nome de uma cidade.";

        resultado.innerHTML = "";

        return;
    }


    status.textContent =
        "Procurando...";

    resultado.innerHTML = "";


    try {

        // Codifica o nome da cidade para ser usado na URL.
        const cidadeCodificada =
            encodeURIComponent(nomeCidade);


        // Monta a URL da API.
        const url =
            `https://api.stungevents.com/events` +
            `?city=${cidadeCodificada}` +
            `&limit=10`;


        // Faz a requisição.
        const resposta =
            await fetch(url);


        // Verifica se a API respondeu corretamente.
        if (!resposta.ok) {

            throw new Error(
                `Erro HTTP: ${resposta.status}`
            );

        }


        // Converte a resposta para JSON.
        const dados =
            await resposta.json();


        console.log("Resposta da API:", dados);


        // Exibe os eventos.
        exibirEventos(dados);


    } catch (erro) {

        console.error(erro);

        status.textContent =
            "Não foi possível buscar os eventos.";

        resultado.innerHTML = "";

    }


}

function exibirEventos(dados) {

    /*
     * A API retorna os eventos dentro
     * da propriedade "events".
     */

    const eventos =
        dados.events || [];


    // Verifica se encontramos eventos.
    if (eventos.length === 0) {

        status.textContent =
            "Nenhum evento encontrado.";

        return;
    }


    status.textContent =
        `${eventos.length} evento(s) encontrado(s).`;


    // Percorre cada evento recebido.
    eventos.forEach(evento => {

        // Cria o elemento principal do card.
        const card =
            document.createElement("article");


        card.classList.add("evento");


        /*
         * Os nomes abaixo correspondem
         * exatamente aos campos retornados
         * pela StungEvents API.
         */

        const nome =
            evento.title ??
            "Evento sem nome";


        const imagem =
            evento.image_url ??
            "";


        const local =
            evento.venue_name ??
            "Local não informado";


        const cidadeEvento =
            evento.city ??
            "Cidade não informada";


        const descricao =
            evento.description ??
            "Descrição não disponível.";


        const link =
            evento.ticket_url ??
            "#";


        /*
         * Converte a data UTC para o horário
         * local do navegador.
         */

        let dataFormatada =
            "Data não informada";


        if (evento.start_utc) {

            const data =
                new Date(evento.start_utc);


            dataFormatada =
                data.toLocaleString(
                    "pt-BR",
                    {
                        dateStyle: "short",
                        timeStyle: "short"
                    }
                );

        }


        /*
         * Cria o conteúdo do card.
         */

        card.innerHTML = `

        ${imagem
                ? `
                <img
                    src="${imagem}"
                    alt="${nome}"
                >
            `
                : ""
            }


        <div class="evento-conteudo">

            <h2>
                ${nome}
            </h2>


            <p>
                <strong>Data:</strong> ${dataFormatada}
            </p>


            <p>
                <strong>Local:</strong> ${local}
            </p>


            <p>
                <strong>Cidade:</strong> ${cidadeEvento}
            </p>


            <p>
                ${descricao}
            </p>


            ${link !== "#"
                ? `
                    <a
                        href="${link}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver evento
                    </a>
                `
                : ""
            }

        </div>

    `;


        // Adiciona o card à página.
        resultado.appendChild(card);

    });


}