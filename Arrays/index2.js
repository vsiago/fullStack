
// Factory (Fábrica de objetos)

function criaPessoa(nome, sobrenome, idade) { // parametro
    return{ nome, sobrenome, idade, fala() {console.log(`${this.nome} ${this.sobrenome} fala oi!`)} }
}

const pessoa1 = criaPessoa('Iago', 'Souza', 29) // argumento
const pessoa2 = criaPessoa('Maria', 'Cruz', 30)

console.log(pessoa1.fala());
console.log(pessoa2);