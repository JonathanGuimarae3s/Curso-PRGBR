let tela = document.getElementById("canva");
let ctx = tela.getContext("2d");





ctx.beginPath();
ctx.linewidth=4
ctx.strokeStyle= "Red"

ctx.moveTo(10,10)
ctx.lineTo(100,30)
ctx.lineTo(200,400)
ctx.stroke()


//começo do caminho
ctx.beginPath();

//espessura da linha 
ctx.linewidth=9

//cor da linha
ctx.strokeStyle= "blue"

//cor de fundo do fechamento
ctx.fillStyle = "red"

//move o curso de criação
ctx.moveTo(320,175)

//cria a linha
ctx.lineTo(200,240)
ctx.lineTo(200,100)

//fecha a linha(junta as duas linhas)
ctx.closePath();


ctx.stroke()
ctx.fill()


