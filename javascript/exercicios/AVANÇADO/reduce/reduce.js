function novoAluno(nome, idade) {
	return { nome, idade };
}

let alunos = [
	novoAluno("Jose", 23),
	novoAluno("Jose", 44),
	novoAluno("Jose", 40),
	novoAluno("Jose", 23),
];
function calc(total, aluno) {
    console.log(total)
    console.log(aluno);
    // return total + aluno.idade;
}
console.log(alunos.reduce(calc,0))

