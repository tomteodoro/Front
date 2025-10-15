function pegarLocal() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(pos => {
            const { latitude, longitude } = pos.coords;
            document.getElementById("saida").innerHTML =
                `Latitude: ${latitude}<br>Longitude: ${longitude}<br>
                <a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank">Abrir no Google Maps</a>`;
        });
    } else {
        alert("Geolocalização não suportada.");
    }
}