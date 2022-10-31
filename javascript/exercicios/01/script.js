var a = 2;
var b = 3;

var c = a > b;
console.log(c);

var d = 4;
var e = "3";

var f = d === e;
console.log(f);

// boolean
var g = c && f; //c é false e f é false
var h = console.log(g);
if ((h = "false")) {
	console.log("voce conseguiu!");
} else {
	console.log("Não desista!");
}

var idade = 25;
var comida = 2;
//se a  idade for menor que 10 ou  maior que 65
if (idade < 10 || idade > 65) {
	console.log("de gratis");
} else if (comida > 2) {
	console.log("de gratis");
} else {
	console.log("paga ai");
}

// condições
var nome = prompt("qual é o seu nome ?");
alert(`Bom dia, ${nome}!`);

var age = Number(prompt("Qual é a sua idade?"));

if (age >= 18) {
	alert(`${nome},pode dirigir e beber`);
} else {
	alert(`${nome},nao pode dirigir`);
}

// ternario

var ages = prompt("qual é a sua idade ?");
/* se a idade for menor que 10 que é igual a true  o valor da variável será "de gratis"

se a idade for maior que 10 que é igual a false  o valor da variável será "paga ai"

*/
var for_free = ages < 10 ? "de gratis" : " paga ai ";
console.log(for_free);

/*switch
NAO  SERVE PARA FAZER OPERAÇÕES LOGICAS

*/
var nota1 = 10.0;
var nota2 = 10.0;
var media = (nota1 + nota2) / 2;
var conceito = "";

if (media > 8) {
	conceito = "otimo";
} else if ((media > 6, 5 && media < 8)) {
	conceito = "bom";
} else {
	conceito = "regular";
}

switch (conceito) {
	case "otimo":
		console.log(" bom continue assim ");
		break;
	case "bom":
		console.log("foi bom");
		break;
	case "regular":
		console.log("tem que estudar mais");
		break;

	default:
		console.log("[ERRO]");
		break;
}

console.log(`Sua  média foi ${media}`);

/*REPETIÇÕES */

//  for

var a = 5;
for (var vez = 0; vez < a; vez++) {
	console.log(vez);
}
console.log("acabou");

// while

var tenho = 0;
while (tenho < 10) {
	console.log(`Você tem ${tenho} pontos`);
	tenho++;
	if (tenho < 10) {
		console.log(`Você precisa de ${10 - tenho} pontos `);
	}
}

var numero = Math.random();

while (numero < 90) {
	console.log(numero);
	numero++;
}

console.log(numero);
console.log("acabou");

//array

var filo = ["ponde", "cortella", "karnal", "froid", "kant", "karl marx"];

for (var i = 0; i < filo.length; i++) {
	console.log(filo[i]);
}

for (var pensantes in filo) {
	console.log(pensantes);
} //imprime os indices do array

for (var macaco of filo) {
	console.log(macaco);
} //imprime os elementos

//function

var capa = function ok(n2, n3, n4) {
	return n2 + n3 + n4;
};
console.log(capa(3, 3, 3));
