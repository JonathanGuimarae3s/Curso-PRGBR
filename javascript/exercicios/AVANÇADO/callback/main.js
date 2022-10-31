// queero idade cadastrada e o nome cadastrado no array

let usuarios = ["adriano", " marcos"];

function pao() {
	pegaNome();
}

function pegaNome() {
	
    let nome = document.getElementById("nome").value;


	if (nome === "") {
		let box = document.getElementById("box");
		box.innerHTML = `<p> [ERRO]</p>`;
        box.innerHTML+= ""
	} else {
		inserirUsuario(nome, listarUsuarios);
	}
}
function inserirUsuario(nome, callback) {
	// insere o usuario no array

	setTimeout(() => {
		usuarios.push(nome), callback();
	}, 1000);

	escreveNome();
}

function escreveNome() {
	let box = document.getElementById("box");
	box.innerHTML += `<p> Nomes:${usuarios}</p>`;
}
function listarUsuarios() {
	console.log(usuarios);
}
