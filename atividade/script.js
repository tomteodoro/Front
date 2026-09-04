const areaFoto = document.querySelector("#areaFoto");


// Quando uma imagem estiver sendo arrastada sobre a área
areaFoto.addEventListener("dragover", function (event) {

    event.preventDefault();

});


// Quando a imagem for solta na área
areaFoto.addEventListener("drop", function (event) {

    event.preventDefault();

    const arquivo = event.dataTransfer.files[0];

    if (arquivo.type.startsWith("image/")) {

        const imagem = document.createElement("img");

        imagem.src = URL.createObjectURL(arquivo);

        areaFoto.innerHTML = "";

        areaFoto.appendChild(imagem);

    } else {

        alert("Por favor, arraste uma imagem.");

    }

});
