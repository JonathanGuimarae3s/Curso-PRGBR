let tela = document.getElementById("tela")
let ctx = tela.getContext("2d")//especifica o contexto
ctx.moveTo(0,0)
ctx.lineTo(250,250)
ctx.lineTo(0,500)
ctx.moveTo(500,500)
ctx.lineTo(250,250)
ctx.lineTo(500 , 0)
ctx.strokeStyle="black"
ctx.lineWidth=90
ctx.stroke()


let tela2 = document.getElementById("pao")
let ctx2 = tela2.getContext("2d")