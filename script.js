var setaDireita = window.document.getElementById("seta-direita")
var setaDireita2 = window.document.getElementById("seta-direita2")
var plano1 = window.document.getElementById ("plano1")
var plano2 = window.document.getElementById ("plano2")
var plano3 = window.document.getElementById ("plano3")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var setaEsquerda2 = window.document.getElementById("seta-esquerda2")


function RolarParaDireita() {
    plano1.style ="display:none"
    plano2.style ="display:block"
    plano3.style = "display:none"
    setaEsquerda.style ="display:inline; text-align: center;"
    setaDireita.style ="display:none"
    setaEsquerda2.style = "display:none"
    setaDireita2.style = "display:none"

}

function RolarParaEsquerda() {
    plano1.style = "display: block"
    plano3.style = "display: none"
    plano2.style = "display:none"
    setaDireita.style = "display:inline;text-align: center;"
    setaEsquerda.style ="display:none"
    setaEsquerda2.style="display:inline;text-align: center;"
    setaDireita2.style= "display:none"
    
}

function RolarParaEsquerda2(){
    plano3.style = "display: block"
    plano2.style = "display: none"
    plano1.style = "display: none"
    setaDireita.style = "display:none"
    setaEsquerda2.style ="display:none"
    setaEsquerda.style = "display:none"
    setaDireita2.style = "display:inline;text-align: center;"

}
function RolarParaDireita2(){
    plano1.style ="display:block"
    plano2.style ="display:none"
    plano3.style = "display:none"
    setaEsquerda.style ="display:none"
    setaDireita2.style ="display:none"
    setaEsquerda2.style = "display:inline; text-align: center;"
    setaDireita.style = "display:inline;text-align: center;"
}