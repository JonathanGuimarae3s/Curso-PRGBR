let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

//declaro uma nova imagem
let img = new Image();
//endeereço da imagem
img.src =
	"https://i.pinimg.com/564x/af/d3/c4/afd3c491d623d7dbc37ae90d5be3e2ab.jpg";
//funçao ssera ativada quando a pag carregar por completo
img.onload = desenharimg;

function desenharimg() {
	let w = this.naturalWidth / 2;
	let h = this.naturalHeight / 2;
	ctx.drawImage(this, 20, 20, w, h);
}
