// nome da pessoa - notaA - notaB - media - aprovado / reprovado

var nomes= ["Abacate", "Aipim" , "Feijão"]
var notaA= [ 8, 10 , 4]
var notaB= [ 10 , 10 , 10 ]

function media(n1, n2){
    
    return (n1 + n2) /2
}
function passou(media){
    if(media > 7 ){
        return "reprovado"

    }else{
        return "aprovado"

    }
}



for(index in nomes){
    var nA= notaA[index]


    var nB= notaB[index]

    const name = nomes[index]

    var m =media(notaA[index], notaB[index])

    console.log(`Nome: ${name} -Nota 1: ${nA} -Nota 2: ${nB} - Média: ${m} Resultado: ${passou(media)}` )  
}


