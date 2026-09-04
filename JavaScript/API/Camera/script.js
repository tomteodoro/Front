const video = document.querySelector("#camera");

navigator.mediaDevices.getUserMedia({
    video: true
})
.then(function(stream) {
    video.srcObject = stream;
})
.catch(function(erro) {
    console.log("Erro ao acessar a câmera:", erro);
});