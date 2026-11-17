console.log("JavaScript conectado com sucesso!");
const produtos = document.querySelector(".produtos");
const setaProxima = document.querySelector(".proxima");
const setaAnterior = document.querySelector(".anterior");
let posicao = 0;
let produtosPorPagina;
if(window.innerWidth <= 768){
    produtosPorPagina = 1;
} else{
    produtosPorPagina = 3
}
const primeiroProduto = produtos.children  [0];
const larguraProduto = primeiroProduto.offsetWidth + 25;
const totalPaginas = Math.ceil(produtos.children.length / produtosPorPagina);
console.log("Produtos por página:", produtosPorPagina);
console.log("Total de produtos:", produtos.children.length)
console.log("Total de páginas:",totalPaginas);
function atualizarCarrossel(){
    const deslocamento = posicao * larguraProduto * produtosPorPagina;
    produtos.style.transform = `translateX(-${deslocamento}px)`; 
}
console.log(primeiroProduto.offsetWidth);

setaProxima.addEventListener("click", function(){
    if(posicao < totalPaginas - 1){
        posicao++;
    
    atualizarCarrossel();
    }
    console.log(posicao);
});

setaAnterior.addEventListener("click", function(){
    if(posicao > 0){
        posicao--;
        atualizarCarrossel();
    }
    console.log(posicao);
});

console.log(window.innerWidth);