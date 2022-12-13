const frutas = ['Maça', "Pera", "Banana"]

//console.log(frutas[2]);

frutas.forEach((item, indice, array) => {
   // console.log(item)
})

// Produtos


function addProduto() {
    return(
        carrinho.produtoNome = 'Arroz',
        carrinho.produtoPreco = 19,50,
        carrinho.produtoQnt = 2
    )
}

const carrinho = [
    {
    produtoNome: '',
    produtoPreco: '',
    produtoQnt: '',
    valorTotal: this.produtoPreco + this.produtoQnt,
}]

addProduto()