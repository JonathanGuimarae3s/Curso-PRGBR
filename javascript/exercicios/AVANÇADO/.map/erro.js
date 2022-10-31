// function novoAluno(nome , idade) {
// 	return { nome, idade };
// }

// let alunos = [
// 	novoAluno("Jose", 23),
// 	novoAluno("Jose", 44),
// 	novoAluno("Jose", 40),
// 	novoAluno("Jose", 23),
// ];
// // CALLBACK,AQUI SERA CRIADO OUTRO ARRAY
// function menosDe30(aluno){
//     return aluno.idade + " tem " + aluno.nome
// }

// let menoresDe30 = alunos.map(menosDe30)

// console.log(menoresDe30)

// objetos

let a = { nome: "pedro", idade: 10 };
let b = a;
b.idade = 100;
// resolvendo
let c = { ...a };

//  ou
let d = Object.assign({}, a);

console.log(b);

console.log(`resolvido erro com {...a} ${c}`);
console.log(`resolvido erro com object.assign({},a) ${d}`);

// ARRAYS

let z = ["pao", "carla", "hai ", "kai"];

let x = z.slice()

x.push("jao")

console.log(`array nao modificado${z}`)
console.log(`array "modificado" ${x}`)