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

// FUNÇOES DOS CARDS DE INFORMAÇOES

const card =document.querySelector(".card-information");

const openCard = function(){
    card.style.display === "flex" ? card.style.display = "none": card.style.display ="flex";
};


const card2 =document.querySelector(".card-information2");

const openCard2 = function(){
    card2.style.display === "flex" ? card2.style.display = "none": card2.style.display ="flex";
};


const card3 =document.querySelector(".card-information3");

const openCard3 = function(){
    card3.style.display === "flex" ? card3.style.display = "none": card3.style.display ="flex";
};


const card4 =document.querySelector(".card-information4");

const openCard4 = function(){
    card4.style.display === "flex" ? card4.style.display = "none": card4.style.display ="flex";
};


const card5 =document.querySelector(".card-information5");

const openCard5 = function(){
    card5.style.display === "flex" ? card5.style.display = "none": card5.style.display ="flex";
};


const card6 =document.querySelector(".card-information6");

const openCard6 = function(){
    card6.style.display === "flex" ? card6.style.display = "none": card6.style.display ="flex";
};


const card7 =document.querySelector(".card-information7");

const openCard7 = function(){
    card7.style.display === "flex" ? card7.style.display = "none": card7.style.display ="flex";
};


const card8 =document.querySelector(".card-information8");

const openCard8 = function(){
    card8.style.display === "flex" ? card8.style.display = "none": card8.style.display ="flex";
};


const card9 =document.querySelector(".card-information9");

const openCard9 = function(){
    card9.style.display === "flex" ? card9.style.display = "none": card9.style.display ="flex";
};


const card10 =document.querySelector(".card-information10");

const openCard10 = function(){
    card10.style.display === "flex" ? card10.style.display = "none": card10.style.display ="flex";
};


const card11 =document.querySelector(".card-information11");

const openCard11 = function(){
    card11.style.display === "flex" ? card11.style.display = "none": card11.style.display ="flex";
};


const card12 =document.querySelector(".card-information12");

const openCard12 = function(){
    card12.style.display === "flex" ? card12.style.display = "none": card12.style.display ="flex";
};


const card13 =document.querySelector(".card-information13");

const openCard13 = function(){
    card13.style.display === "flex" ? card13.style.display = "none": card13.style.display ="flex";
};
