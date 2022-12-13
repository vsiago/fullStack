function criaPessoa(nome, sobrenome, idade) {
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criaPessoa('Iago', 'Souza', 29)

console.log(pessoa1);