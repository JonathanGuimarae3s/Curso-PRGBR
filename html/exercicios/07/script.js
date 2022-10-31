let video= document.getElementById("video1")
function voltar(){  video.currentTime-=0.5
} 
function avancar(){
   
   
    video.currentTime+=0.5

} 
function diminuir_vel()
{video.playbackRate-= 0.1} 
function aumentar_vel(){
    video.playbackRate+= 0.1

} 

function play(){
    video.play()
}
function stope(){
    video.pause()
    video.currentTime = 0
} 
