var notas =[7,10,30,99]
for(var i=0;i<notas.length;i++){
    if (notas[i]>=50){
        console.log(notas[i])
    }
    
}

function mediaNotas(){
    var soma=0
    for(var i=0;i<notas.length;i++){
        soma=soma+notas[i] 
    }
    var media=soma/notas.length
    console.log (media)

}

mediaNotas ()