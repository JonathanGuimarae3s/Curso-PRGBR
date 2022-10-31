let tela = document.getElementById("canva");
let ctx = tela.getContext("2d");
let circle = {

 x : 250,
 y : 250,
 raio :100,
 inicio:0,
 fim: 1,
    

}

function draw(c){

    ctx.beginPath()
    ctx.rect(0,0,500,500)
    ctx.fillStyle =  " rosybrown"
    ctx.stroke()
    ctx.fill()
        







    ctx.beginPath();
    ctx.strokeStyle = "red"
    ctx.fillStyle= "blue"
    ctx.arc(c.x,c.y,c.raio,c.inicio,c.fim )
    ctx.fill()
    ctx.stroke()


    



    ctx.beginPath();
    ctx.strokeStyle = "yellow"
    ctx.fillStyle= "black"
    ctx.arc(300,150,50,0,2*Math.PI)
    ctx.fill()
    ctx.stroke()
    
    
    
    ctx.beginPath();
    ctx.strokeStyle = "yellow"
    ctx.fillStyle= "black"
    ctx.arc(190,150,50,0,2*Math.PI)
    ctx.fill()
    ctx.stroke()



}

setInterval(function(){
    if(circle.fim <= 1 * Math.PI){
        circle.fim +=0.2
        circle.x += 0.2
        
    }
    draw(circle)
},40)






