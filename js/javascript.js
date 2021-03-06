let element = "#botao";
let clique; // declara a variável para o nome da função
document.querySelector(element).addEventListener('click', clique = (ev) => {
    console.log("evento");
});

// esse listener abaixo é apenas para ilustrar o cancelamento do evento
document.querySelector("#cancelar").addEventListener('click', cancela = () => {
    // linhas de exemplo 
    console.log("evento do botão cancelado");
    document.querySelector(element).textContent = "Clique-me e nada acontece :(";
    document.querySelector("#cancelar").textContent = "Evento foi cancelado";
    document.querySelector("#cancelar").removeEventListener('click', cancela);
    // fim das linhas de exemplo

    // remove o evento de clique no botão   
    document.querySelector(element).removeEventListener('click', clique);
});