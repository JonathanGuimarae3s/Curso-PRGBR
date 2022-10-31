let nomes = ["joao", "matos", "kay"];

function inserirUsuarios(nome) {
	let promises = new Promise(function (resolve, reject) {
		setTimeout(() => {
			nomes.push(nome);
			let error = true;
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
inserirUsuarios("igor")
	.then(listarUsuario)
	.catch((error) => {
		console.log(error.msg);
	});
