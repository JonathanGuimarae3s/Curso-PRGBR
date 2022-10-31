function novoAluno(nome , idade) {
	return { nome, idade };
}

let alunos = [
	novoAluno("Jose", 23),
	novoAluno("Jose", 44),
	novoAluno("Jose", 40),
	novoAluno("Jose", 23),
];
// CALLBACK,AQUI SERA CRIADO OUTRO ARRAY 
function menosDe30(aluno){
    return aluno.idade + " tem " + aluno.nome
}


let menoresDe30 = alunos.map(menosDe30)

console.log(menoresDe30)