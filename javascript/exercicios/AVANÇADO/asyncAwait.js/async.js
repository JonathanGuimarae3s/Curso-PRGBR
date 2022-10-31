let nomes = ["joao", "matos", "kay"];

function inserirUsuarios(nome) {
	let promises = new Promise(function (resolve, reject) {
		setTimeout(() => {
			nomes.push(nome);
			let error = false8;
			if (!error) {
				resolve();
			} else {
				reject({ msg: "erro" });
			}
		}, 1000);
	});

	return promises;
}

function listarUsuario() {
	console.log(nomes);
	for (element of nomes) {
		console.log(typeof element);
	}
}
// async serve para especificar o tipo da função
async function executar() {
	// primeiro ela vai executar a  função inserirUsers, apos execução completa dessa funcao o Js dara prosseguimento ao bloco
	await inserirUsuarios("igor");
	listarUsuario();
}

executar();
