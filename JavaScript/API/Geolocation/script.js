const div = document.getElementById("geolocation");

navigator.geolocation.getCurrentPosition(
    function (posicao) {

        const on = document.createElement("img");
        on.src = "https://cdn-icons-png.flaticon.com/512/856/856332.png";
        div.appendChild(on);

        console.log("Latitude:", posicao.coords.latitude);
        console.log("Longitude:", posicao.coords.longitude);
        console.log("Precisão:", posicao.coords.accuracy);
    },
    function (erro) {

        const off = document.createElement("img");
        off.src = "https://cdn-icons-png.flaticon.com/512/16362/16362287.png";
        div.appendChild(off);

        console.log("Não foi possível obter a localização.", erro);
    }
);

















































// (posicao) => {






// erro.code === 1: o usuário negou a permissão.
// erro.code === 2: a localização não pôde ser determinada.
// erro.code === 3: demorou demais para obter a localização.
