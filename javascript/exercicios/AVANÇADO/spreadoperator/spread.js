// OBJETO

var pessoa = { nome: "noni", idade: 23 };
var contato = { tel: 2345678, email: "@gmail.com" };
var copia = { ...pessoa, cidade: "rio de janeiro", ...contato };
copia.idade = 44;
console.log(pessoa);
console.log(copia);

// ARRAY

var nota1 = [1, 2, 3, 2, 3, 4];

var nota2 = [1, 2, 3, 2, 3, 4];

var todasAsNotas = [...nota1 , ...nota2]
console.log(todasAsNotas)