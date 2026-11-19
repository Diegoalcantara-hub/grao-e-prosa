console.log("JavaScript conectado com sucesso!");
const produtos = document.querySelector(".produtos");
const setaProxima = document.querySelector(".proxima");
const setaAnterior = document.querySelector(".anterior");
let posicao = 0;
let produtosPorPagina;
let totalPaginas;
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
const estilos = getComputedStyle(produtos);
let espacamento = parseFloat(estilos.columnGap);
let larguraProduto = primeiroProduto.offsetWidth + espacamento;
console.log("Espaçamento:", espacamento);
console.log("Largura do produto:", larguraProduto);

console.log("Produtos por página:", produtosPorPagina);
console.log("Total de produtos:", produtos.children.length)
console.log("Total de páginas:", totalPaginas);
function atualizarCarrossel() {
    const deslocamento = posicao * larguraProduto * produtosPorPagina;
    produtos.style.transform = `translateX(-${deslocamento}px)`;
    console.log(primeiroProduto.offsetWidth);
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
    console.log(posicao);
});

setaAnterior.addEventListener("click", function () {
    if (posicao > 0) {
        posicao--;
        atualizarCarrossel();
        atualizarSetas();

    }




});


window.addEventListener("resize", function () {
    atualizarResponsividade();

    espacamento = parseFloat(getComputedStyle(produtos).columnGap);
    larguraProduto = primeiroProduto.offsetWidth + espacamento;

    posicao = 0;
    atualizarCarrossel();
    atualizarSetas();
    console.log(window.innerWidth);


});
