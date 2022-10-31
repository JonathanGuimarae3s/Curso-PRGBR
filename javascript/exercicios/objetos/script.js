


console.log("OBJETO")


var samurai_x = {
       nome: "Rurouni Kenshi",
       idade: 28,
       esposa: "Kaoru",
       filho: "Kenji Himura",
       afilhado: "Yahiko",
       adversarios:["Makoto Shishio","Yukishiro Enishi", "Sagara Sanosuke", "Hajime Saitou" ,"Seta Soujiro", "Shinomori Aoshi"]
}

console.log(samurai_x)
console.log( `A esposa de ${samurai_x.nome}, o Battousai, é a ${samurai_x.esposa}-sama`)
console.log( `${samurai_x["adversarios"][2]} foi o primeiro adversário do anime e o último foi o ex-cunhado, ${samurai_x["adversarios"][1]}`)


console.log("MÉTODO")
//Método é função dentro do objeto

var m = function(){
    return (this.notas[0]+this.notas[1]+this.notas[2]+this.notas[3])/2


}

var aluno = {
    aluno: "FROID",
    notas:[10, 7, 9, 3],//ARRAY
    media:m   
}


var aluno1 = {
    aluno: "Jean",
    notas:[10, 2, 9, 3],//ARRAY
    media:m

    
}


console.log(aluno.aluno)
console.log(aluno.media())
console.log(aluno1.aluno)
console.log(aluno1.media())


console.log("CONSTRUTORES")

//Construtores  é uma forma de construir um objeto de uma forma otimizada,sem alterar o codigo de cada estrutura que utiliza um mesmo código
function escola(alcunha, ponto1, ponto2){
    return{
        alcunha:alcunha,
        ponto1: ponto1,
        ponto2: ponto2,
        media: function(){
            return (this.ponto1+this.ponto2)/2
        }

    }



}

var  turma = [
    escola("Jonathan", 10, 10),
    escola("matos", 9 , 0 ),
    escola("jonas", 9 , 9)
//array



]


var pessoa = turma[0]



console.log (pessoa.media())

//forEach ---> Ele tem a função de varrer o array
//  forEach é a mesma coisa que FOR (VAR XX OF YY)  {}
turma.forEach(function (elemento){
    console.log(elemento);
    
    // aqui ele vai pegar cada um dos objetos que tem dentro do array e vai imprimir o elemento 
})
// ISSO É  A MESMA COISA QUE 

for(var pessoa of turma){

    console.log(pessoa.alcunha +"-" + pessoa.media())

}




console.log("CONSTRUTORES COM THIS")

function criado(name , n1, n2){
    this.name = name
    this.nota1= n1
    this.nota2= n2
    this.media= function(){
        return (this.nota1 + this.nota2)/2

    }
}


var v = new criado("pato", 2, 2)

console.log(v.media())













