function pegarLocal() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async pos => {
            const { latitude, longitude } = pos.coords;

            // Exibe coordenadas primeiro (opcional)
            const saida = document.getElementById("saida");
            saida.innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}<br>Carregando endereço...`;

            try {
                const resposta = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
                const dados = await resposta.json();

                const endereco = dados.display_name || "Endereço não encontrado.";

                saida.innerHTML = `
                    <strong>Endereço:</strong><br>${endereco}<br><br>
                    <a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank">Ver no Google Maps</a>
                `;
            } catch (erro) {
                saida.innerHTML += "<br>Erro ao obter o endereço.";
                console.error(erro);
            }
        });
    } else {
        alert("Geolocalização não suportada.");
    }
}
