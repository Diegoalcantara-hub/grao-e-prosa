console.log("JavaScript conectado com sucesso!");
const produtos = document.querySelector(".produtos");
const setaProxima = document.querySelector(".proxima");
const setaAnterior = document.querySelector(".anterior");
let posicao = 0;
let produtosPorPagina;
let totalPaginas;
let temporizador;
function atualizarResponsividade() {
    if (window.innerWidth <= 768) {
        produtosPorPagina = 1;
    } else {
        produtosPorPagina = 3;
    }

    totalPaginas = Math.ceil(produtos.children.length / produtosPorPagina);
}
atualizarResponsividade();

const primeiroProduto = produtos.children[0];
let estilos;
let espacamento;
let larguraProduto;
function atualizarDimensoes() {
    estilos = getComputedStyle(produtos);
    espacamento = parseFloat(estilos.columnGap);
    larguraProduto = primeiroProduto.offsetWidth + espacamento;
}
atualizarDimensoes();

function atualizarCarrossel() {
    const deslocamento = posicao * larguraProduto * produtosPorPagina;
    produtos.style.transform = `translateX(-${deslocamento}px)`;

}
function atualizarSetas() {
    setaAnterior.disabled = posicao === 0;
    setaProxima.disabled = posicao === totalPaginas - 1;
}
atualizarSetas();
setaProxima.addEventListener("click", function () {
    if (posicao < totalPaginas - 1) {
        posicao++;

        atualizarCarrossel();
        atualizarSetas();

    }
});

setaAnterior.addEventListener("click", function () {
    if (posicao > 0) {
        posicao--;
        atualizarCarrossel();
        atualizarSetas();

    }




});


window.addEventListener("resize", function () {
    clearTimeout(temporizador);
    temporizador = setTimeout(function () {
        atualizarResponsividade();
        atualizarDimensoes();
        posicao = 0;
        atualizarCarrossel();
        atualizarSetas();
    }, 500);


});
