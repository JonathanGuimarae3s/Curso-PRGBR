var pessoa = {
	nome: "noni",
	idade: 23,
    email:"@gmail.com"

};
var pessoa2= {
	nome: "oni",
	idade: 232,
    email:"@gm2ail.com"

};

//desestruturar é pegar uma propiedade e fazer ela virar uma variavel fora do objeto

const {nome ,...resto}= pessoa2


console.log(resto)

console.log("seu nome é " + nome)


// array
console.log('ARRAY')


var array =  [pessoa, pessoa2]

var [noni, oni ]=array
console.table(array)

console.log(oni)