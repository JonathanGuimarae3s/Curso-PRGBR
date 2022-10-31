let tela = document.getElementById("pao")
let ctx = tela.getContext("2d")

ctx.fillStyle = "blue"
ctx.fillRect(10,10,100,200)

let xd = document.getElementById("mao")
let ctx2 = xd.getContext("2d")

ctx2.strokeStyle = "red"
ctx2.strokeRect(10,10,100,200)

let dx = document.getElementById("opa")
let ctx3 = dx.getContext("2d")

ctx3.rect(10,10,100,200)
ctx3.fillStyle ="blue"
ctx3.strokeStyle = "red"



ctx3.fill()
ctx3.stroke()
ctx3.clearRect(40,40,30,30)



// begin 