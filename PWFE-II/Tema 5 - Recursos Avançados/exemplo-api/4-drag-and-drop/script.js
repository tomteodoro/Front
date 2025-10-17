const item = document.getElementById("item");
const caixa = document.getElementById("caixa");

item.addEventListener("dragstart", e => {
    e.dataTransfer.setData("id", e.target.id);
});

caixa.addEventListener("dragover", e => e.preventDefault());
caixa.addEventListener("drop", e => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    caixa.appendChild(document.getElementById(id));
});