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
// MUDANDO GIFS ROSCA SCOTT

var gifscott1 = window.document.getElementById("rosca-scott1")
var gifscott2 = window.document.getElementById("rosca-scott2")
var setaDireitaScott = window.document.getElementById("setascottD")
var setaEsquerdaScott = window.document.getElementById("setascottE")

function mudarGifRoscaConc(){
    gifscott1.style = "display:none"
    gifscott2.style = "display:inline"
    setaDireitaScott.style = "display:none"
    setaEsquerdaScott.style = "display:inline"

}
function voltarGifRoscaConc(){
    gifscott1.style = "display:inline"
    gifscott2.style = "display:none"
    setaDireitaScott.style = "display:inline"
    setaEsquerdaScott.style = "display:none"
}

// MUDANDO GIF ROSCA MARTELO

var setaEsqMartelo = window.document.getElementById("setaEmartelo")
var setaDirMartelo = window.document.getElementById("setaDmartelo")
var marteloSentado = window.document.getElementById("martelo-setado")
var marteloN = window.document.getElementById("martelo")

function mudarGifMartelo(){
    marteloSentado.style = "display:none"
    marteloN.style = "display:inline"
    setaDirMartelo.style = "display:inline"
    setaEsqMartelo.style = "display:none"
}
function voltarGifMartelo(){
    marteloN.style = "display:none"
    marteloSentado.style = "display:inline"
    setaDirMartelo.style = "display:none"
    setaEsqMartelo.style = "display:inline"
}


// FUNÇAO ABRIR E FECHAR VIDEO DE DEMONSTRAÇÃO DO EXERCICIO BÚLGARO
var buttAbrirVideoBul = window.document.getElementById("videobulgaro")
var videoBulgaro = window.document.getElementById("videobulgaro-aberto")
var buttFecharVideoBul = window.document.getElementById("fechar-videobulgaro")

function abrirVideoBulgaro(){
    buttAbrirVideoBul.style = "display:none"
    videoBulgaro.style = "display:flex"
    buttFecharVideoBul.style = "display:flex"
}
function fecharVideoBulgaro(){
    buttAbrirVideoBul.style = "display:inline"
    videoBulgaro.style = "display:none"
    buttFecharVideoBul.style = "display:none"
}


// FUNÇAO ABRIR E FECHAR VIDEO DE DEMONSTRAÇÃO DO EXERCICIO ABDUTORA
var buttAbrirVideo = window.document.getElementById("videoabdutora")
var videoAbdutora = window.document.getElementById("videoabdutora-aberto")
var buttFecharVideo = window.document.getElementById("fechar-videoabdutora")

function abrirVideoAbdutora(){
    buttAbrirVideo.style = "display:none"
    videoAbdutora.style = "display:flex"
    buttFecharVideo.style = "display:flex"
}
function fecharVideoAbdutora(){
    buttAbrirVideo.style = "display:inline"
    videoAbdutora.style = "display:none"
    buttFecharVideo.style = "display:none"
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

const card14 =document.querySelector(".card-information14");

const openCard14 = function(){
    card14.style.display === "flex" ? card14.style.display = "none": card14.style.display ="flex";
};

const card15 =document.querySelector(".card-information15");

const openCard15 = function(){
    card15.style.display === "flex" ? card15.style.display = "none": card15.style.display ="flex";
};

const card16 =document.querySelector(".card-information16");

const openCard16 = function(){
    card16.style.display === "flex" ? card16.style.display = "none": card16.style.display ="flex";
};

const card17 =document.querySelector(".card-information17");

const openCard17 = function(){
    card17.style.display === "flex" ? card17.style.display = "none": card17.style.display ="flex";
};

const card18 =document.querySelector(".card-information18");

const openCard18 = function(){
    card18.style.display === "flex" ? card18.style.display = "none": card18.style.display ="flex";
};

const card19 =document.querySelector(".card-information19");

const openCard19 = function(){
    card19.style.display === "flex" ? card19.style.display = "none": card19.style.display ="flex";
};

const card20 =document.querySelector(".card-information20");

const openCard20 = function(){
    card20.style.display === "flex" ? card20.style.display = "none": card20.style.display ="flex";
};

const card21 =document.querySelector(".card-information21");

const openCard21 = function(){
    card21.style.display === "flex" ? card21.style.display = "none": card21.style.display ="flex";
};

const card22 =document.querySelector(".card-information22");

const openCard22 = function(){
    card22.style.display === "flex" ? card22.style.display = "none": card22.style.display ="flex";
};

const card23 =document.querySelector(".card-information23");

const openCard23 = function(){
    card23.style.display === "flex" ? card23.style.display = "none": card23.style.display ="flex";
};

const card24 =document.querySelector(".card-information24");

const openCard24 = function(){
    card24.style.display === "flex" ? card24.style.display = "none": card24.style.display ="flex";
};

const card25 =document.querySelector(".card-information25");

const openCard25 = function(){
    card25.style.display === "flex" ? card25.style.display = "none": card25.style.display ="flex";
};

const card26 =document.querySelector(".card-information26");

const openCard26 = function(){
    card26.style.display === "flex" ? card26.style.display = "none": card26.style.display ="flex";
};

const card27 =document.querySelector(".card-information27");

const openCard27 = function(){
    card27.style.display === "flex" ? card27.style.display = "none": card27.style.display ="flex";
};

const card28 =document.querySelector(".card-information28");

const openCard28 = function(){
    card28.style.display === "flex" ? card28.style.display = "none": card28.style.display ="flex";
};

const card29 =document.querySelector(".card-information29");

const openCard29 = function(){
    card29.style.display === "flex" ? card29.style.display = "none": card29.style.display ="flex";
};

const card30 =document.querySelector(".card-information30");

const openCard30 = function(){
    card30.style.display === "flex" ? card30.style.display = "none": card30.style.display ="flex";
};

const card31 =document.querySelector(".card-information31");

const openCard31 = function(){
    card31.style.display === "flex" ? card31.style.display = "none": card31.style.display ="flex";
};


// FUNCTION PARA LOGIN SIMPLES

function logar(){
        
    var login = window.document.getElementById('login').value;
    var senha = window.document.getElementById('senha').value;
    

    if (login == "Fran" && senha == "CaioTeAmo<3"){
        alert('Hora de Treinar !');
        location.href = "planodetreinoparaFran.html"

    }else{
        alert('Usuario ou senha incorretos');
    }
}

// FUNÇÃO PARA ESCOLHER EXERCICIOS.(estudos "setInterval")

// Nessa função, a intenção é fazer com que os cards selecionados pelo usuario fiquem em evidencia em relação aos outros e logo em seguida seja submetido por outro botão em uma pag para q um treino com todos os exercicios selecionados apareçam separadamente das demais em opções.
// PARTE COMENTADA NA FUNÇÃO ABAIXO.


var treinosSelecaoTotal = document.getElementsByClassName('divstreinos')
treinosSelecaoTotal = Array.from(treinosSelecaoTotal)

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque = document.getElementsByClassName("exercicio")[0];
    cardDestaque.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[0].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque(){
    var cardDestaque = document.getElementsByClassName("exercicio")[0];
    cardDestaque.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[0].style.display='flex'
  
}
function closeCard(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[0].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[0];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque1 = document.getElementsByClassName("exercicio")[1];
    cardDestaque1.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque1.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[1].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque1(){
    var cardDestaque1 = document.getElementsByClassName("exercicio")[1];
    cardDestaque1.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[1].style.display='flex'
}
function closeCard1(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[1].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[1];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque2 = document.getElementsByClassName("exercicio")[2];
    cardDestaque2.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque2.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[2].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------

function alternarDestaque2(){
    var cardDestaque2 = document.getElementsByClassName("exercicio")[2];
    cardDestaque2.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[2].style.display='flex'
}
function closeCard2(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[2].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[2];
    cardDestaque.classList='exercicio'
}    

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque3 = document.getElementsByClassName("exercicio")[3];
    cardDestaque3.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque3.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[3].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque3(){
    var cardDestaque3 = document.getElementsByClassName("exercicio")[3];
    cardDestaque3.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[3].style.display='flex'
}
function closeCard3(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[3].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[3];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque4 = document.getElementsByClassName("exercicio")[4];
    cardDestaque4.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque4.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[4].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque4(){
    var cardDestaque4 = document.getElementsByClassName("exercicio")[4];
    cardDestaque4.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[4].style.display='flex'
}
function closeCard4(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[4].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[4];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque5 = document.getElementsByClassName("exercicio")[5];
    cardDestaque5.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque5.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[5].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque5(){
    var cardDestaque5 = document.getElementsByClassName("exercicio")[5];
    cardDestaque5.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[5].style.display='flex'
}
function closeCard5(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[5].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[5];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque6 = document.getElementsByClassName("exercicio")[6];
    cardDestaque6.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque6.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[6].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque6(){
    var cardDestaque6 = document.getElementsByClassName("exercicio")[6];
    cardDestaque6.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[6].style.display='flex'
}
function closeCard6(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[6].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[6];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque7 = document.getElementsByClassName("exercicio")[7];
    cardDestaque7.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque7.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[7].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque7(){
    var cardDestaque7 = document.getElementsByClassName("exercicio")[7];
    cardDestaque7.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[7].style.display='flex'
}
function closeCard7(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[7].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[7];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque8 = document.getElementsByClassName("exercicio")[8];
    cardDestaque8.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque8.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[8].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque8(){
    var cardDestaque8 = document.getElementsByClassName("exercicio")[8];
    cardDestaque8.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[8].style.display='flex'
}
function closeCard8(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[8].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[8];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque9 = document.getElementsByClassName("exercicio")[9];
    cardDestaque9.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque9.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[9].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque9(){
    var cardDestaque9 = document.getElementsByClassName("exercicio")[9];    
    cardDestaque9.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[9].style.display='flex'
}
function closeCard9(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[9].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[9];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque10 = document.getElementsByClassName("exercicio")[10];
    cardDestaque10.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque10.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[10].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque10(){
    var cardDestaque10 = document.getElementsByClassName("exercicio")[10];
    cardDestaque10.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[10].style.display='flex'
}
function closeCard10(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[10].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[10];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque11 = document.getElementsByClassName("exercicio")[11];
    cardDestaque11.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque11.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[11].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque11(){
    var cardDestaque11 = document.getElementsByClassName("exercicio")[11];
    cardDestaque11.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[11].style.display='flex'
}
function closeCard11(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[11].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[11];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque12 = document.getElementsByClassName("exercicio")[12];
    cardDestaque12.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque12.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[12].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque12(){
    var cardDestaque12 = document.getElementsByClassName("exercicio")[12];
    cardDestaque12.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[12].style.display='flex'
}
function closeCard12(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[12].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[12];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque13 = document.getElementsByClassName("exercicio")[13];
    cardDestaque13.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque13.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[13].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque13(){
    var cardDestaque13 = document.getElementsByClassName("exercicio")[13];
    cardDestaque13.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[13].style.display='flex'
}
function closeCard13(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[13].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[13];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque14 = document.getElementsByClassName("exercicio")[14];
    cardDestaque14.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque14.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[14].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque14(){
    var cardDestaque14 = document.getElementsByClassName("exercicio")[14];
    cardDestaque14.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[14].style.display='flex'
}
function closeCard14(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[14].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[14];
    cardDestaque.classList='exercicio'
}    

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque15 = document.getElementsByClassName("exercicio")[15];
    cardDestaque15.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque15.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[15].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque15(){
    var cardDestaque15 = document.getElementsByClassName("exercicio")[15];
    cardDestaque15.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[15].style.display='flex'
}
function closeCard15(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[15].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[15];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque16 = document.getElementsByClassName("exercicio")[16];
    cardDestaque16.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque16.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[16].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque16(){
    var cardDestaque16 = document.getElementsByClassName("exercicio")[16];
    cardDestaque16.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[16].style.display='flex'
}
function closeCard16(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[16].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[16];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque17 = document.getElementsByClassName("exercicio")[17];
    cardDestaque17.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque17.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[17].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque17(){
    var cardDestaque17 = document.getElementsByClassName("exercicio")[17];
    cardDestaque17.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[17].style.display='flex'
}
function closeCard17(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[17].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[17];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque18 = document.getElementsByClassName("exercicio")[18];
    cardDestaque18.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque18.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[18].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque18(){
    var cardDestaque18 = document.getElementsByClassName("exercicio")[18];
    cardDestaque18.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[18].style.display='flex'
}
function closeCard18(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[18].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[18];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque19 = document.getElementsByClassName("exercicio")[19];
    cardDestaque19.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque19.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[19].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque19(){
    var cardDestaque19 = document.getElementsByClassName("exercicio")[19];
    cardDestaque19.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[19].style.display='flex'
}
function closeCard19(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[19].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[19];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque20 = document.getElementsByClassName("exercicio")[20];
    cardDestaque20.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque20.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[20].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque20(){
    var cardDestaque20 = document.getElementsByClassName("exercicio")[20];
    cardDestaque20.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[20].style.display='flex'
}
function closeCard20(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[20].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[20];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque21 = document.getElementsByClassName("exercicio")[21];
    cardDestaque21.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque21.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[21].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque21(){
    var cardDestaque21 = document.getElementsByClassName("exercicio")[21];    
    cardDestaque21.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[21].style.display='flex'
}
function closeCard21(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[21].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[21];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque22 = document.getElementsByClassName("exercicio")[22];
    cardDestaque22.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque22.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[22].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque22(){
    var cardDestaque22 = document.getElementsByClassName("exercicio")[22];
    cardDestaque22.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[22].style.display='flex'
}
function closeCard22(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[22].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[22];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque23 = document.getElementsByClassName("exercicio")[23];
    cardDestaque23.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque23.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[23].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque23(){
    var cardDestaque23 = document.getElementsByClassName("exercicio")[23];
    cardDestaque23.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[23].style.display='flex'
}
function closeCard23(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[23].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[23];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque24 = document.getElementsByClassName("exercicio")[24];
    cardDestaque24.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque24.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[24].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque24(){
    var cardDestaque24 = document.getElementsByClassName("exercicio")[24];
    cardDestaque24.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[24].style.display='flex'
}
function closeCard24(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[24].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[24];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque25 = document.getElementsByClassName("exercicio")[25];
    cardDestaque25.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque25.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[25].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque25(){
    var cardDestaque25 = document.getElementsByClassName("exercicio")[25];
    cardDestaque25.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[25].style.display='flex'
}
function closeCard25(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[25].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[25];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque26 = document.getElementsByClassName("exercicio")[26];
    cardDestaque26.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque26.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[26].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque26(){
    var cardDestaque26 = document.getElementsByClassName("exercicio")[26];
    cardDestaque26.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[26].style.display='flex'
}
function closeCard26(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[26].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[26];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque27 = document.getElementsByClassName("exercicio")[27];
    cardDestaque27.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque27.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[27].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque27(){
    var cardDestaque27 = document.getElementsByClassName("exercicio")[27];
    cardDestaque27.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[27].style.display='flex'
}
function closeCard27(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[27].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[27];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque28 = document.getElementsByClassName("exercicio")[28];
    cardDestaque28.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque28.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[28].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque28(){
    var cardDestaque28 = document.getElementsByClassName("exercicio")[28];    
    cardDestaque28.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[28].style.display='flex'
}
function closeCard28(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[28].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[28];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque29 = document.getElementsByClassName("exercicio")[29];
    cardDestaque29.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque29.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[29].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque29(){
    var cardDestaque29 = document.getElementsByClassName("exercicio")[29];
    cardDestaque29.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[29].style.display='flex'
}
function closeCard29(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[29].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[29];
    cardDestaque.classList='exercicio'
}

//---------FUNÇÃO DBLCLICK PARA MOBILE
var ultimoToque = 0;
var cardDestaque30 = document.getElementsByClassName("exercicio")[30];
    cardDestaque30.addEventListener("click", function() {
        
        var agora = new Date().getTime();
        var intervalo = agora - ultimoToque;

        if (intervalo <= 300 && intervalo > 0){

            cardDestaque30.classList.toggle('exercicio-escolhido')
            treinosSelecaoTotal[30].style.display='flex'
        }
        ultimoToque = agora;
    })
//----------
function alternarDestaque30(){
    var cardDestaque30 = document.getElementsByClassName("exercicio")[30];
    cardDestaque30.classList.toggle('exercicio-escolhido')
    treinosSelecaoTotal[30].style.display='flex'
}
function closeCard30(){
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    treinosSelecaoTotal[30].style.display='none'

    var cardDestaque = document.getElementsByClassName("exercicio")[30];
    cardDestaque.classList='exercicio'
}

// ------------------------FUNÇÃO PARA ABRIR TREINOS PREVIAMENTE SELECIONADOS INICIAL
// ----VERIFICAÇÃO PARA SABER SE O USUARIO SELECIONOU ALGUM EXERCICIO

function selecionarAlgum(){
    var cardDestaque = document.getElementsByClassName("exercicio")
    cardDestaque = Array.from(cardDestaque)
    


    var geralsuperior = document.getElementById('geralsuperior')
    var sectiongeral = document.getElementById('geraltreinos')
    
    
    
    if(cardDestaque[0].classList =='exercicio'&&cardDestaque[1].classList =='exercicio'&&cardDestaque[2].classList =='exercicio'&&cardDestaque[3].classList =='exercicio'&&cardDestaque[4].classList =='exercicio'&&cardDestaque[5].classList =='exercicio'&&cardDestaque[6].classList =='exercicio'&&cardDestaque[7].classList =='exercicio'&&cardDestaque[8].classList =='exercicio'&&cardDestaque[9].classList =='exercicio'&&cardDestaque[10].classList =='exercicio'&&cardDestaque[11].classList =='exercicio'&&cardDestaque[12].classList =='exercicio'&&cardDestaque[13].classList =='exercicio'&&cardDestaque[14].classList =='exercicio'&&cardDestaque[15].classList =='exercicio'&&cardDestaque[16].classList =='exercicio'&&cardDestaque[17].classList =='exercicio'&&cardDestaque[18].classList =='exercicio'&&cardDestaque[19].classList =='exercicio'&&cardDestaque[20].classList =='exercicio'&&cardDestaque[21].classList =='exercicio'&&cardDestaque[22].classList =='exercicio'&&cardDestaque[23].classList =='exercicio'&&cardDestaque[24].classList =='exercicio'&&cardDestaque[25].classList =='exercicio'&&cardDestaque[26].classList =='exercicio'&&cardDestaque[27].classList =='exercicio'&&cardDestaque[28].classList =='exercicio'&&cardDestaque[29].classList =='exercicio'&&cardDestaque[30].classList =='exercicio'){
        alert('Ops... algo deu errado, você não selecionou nenhum exercício.')
        
        
        sectiongeral.style.display='none'
        sectiongeral.style.flexDirection='column'
        sectiongeral.style.textAlingn='center'
   
      
        geralsuperior.style.display='flex'
        geralsuperior.style.flexDirection='column'
        geralsuperior.style.textAlingn='center'
    }
}
// ------------------------FUNÇÃO PARA ABRIR TREINOS PREVIAMENTE SELECIONADOS------------------------------
function  abrirSelecao(){



    
    
    



    var geralsuperior = document.getElementById('geralsuperior')
    var sectiongeral = document.getElementById('geraltreinos')
    
    sectiongeral.style.display='flex'
    sectiongeral.style.flexDirection='column'
    sectiongeral.style.textAlingn='center'
   
      
    geralsuperior.style.display='none'

// PARTE DA FUNÇÃO QUE ABRE OU DEIXA FECHADO OS TITUDOS E BOTÃO HOME DE VOLTAR

   



    var orgntitulos = document.getElementsByClassName('titulotreinos')
    orgntitulos = Array.from(orgntitulos)
    
    var treinosSelecaoTotal = document.getElementsByClassName("divstreinos");
    treinosSelecaoTotal = Array.from(treinosSelecaoTotal)
    
// TREINO DE PEITO / TITULO PEITO
    treinosSelecaoTotal[0].style.display === 'flex' || treinosSelecaoTotal[1].style.display === 'flex'|| treinosSelecaoTotal[2].style.display === 'flex' || treinosSelecaoTotal[3].style.display === 'flex' ? orgntitulos[0].style.display='flex' : orgntitulos[0].style.display='none';

// TREINO DE BICEPS / TITULO BICEPS
    treinosSelecaoTotal[4].style.display === 'flex' || treinosSelecaoTotal[5].style.display === 'flex'|| treinosSelecaoTotal[6].style.display === 'flex' || treinosSelecaoTotal[7].style.display === 'flex' ? orgntitulos[1].style.display='flex' : orgntitulos[1].style.display='none';

// TREINO DE COSTA / TITULO COSTA 
    treinosSelecaoTotal[8].style.display === 'flex' || treinosSelecaoTotal[9].style.display === 'flex'|| treinosSelecaoTotal[10].style.display === 'flex' || treinosSelecaoTotal[11].style.display === 'flex' ? orgntitulos[2].style.display='flex' : orgntitulos[2].style.display='none';

// TREINO DE TRICEPS / TITULO TRICEPS
    treinosSelecaoTotal[12].style.display === 'flex' || treinosSelecaoTotal[13].style.display === 'flex'|| treinosSelecaoTotal[14].style.display === 'flex' || treinosSelecaoTotal[15].style.display === 'flex' || treinosSelecaoTotal[16].style.display === 'flex' ? orgntitulos[3].style.display='flex' : orgntitulos[3].style.display='none';

// TREINO DE TRICEPS / TITULO OMBRO
treinosSelecaoTotal[17].style.display === 'flex' || treinosSelecaoTotal[18].style.display === 'flex'|| treinosSelecaoTotal[19].style.display === 'flex' || treinosSelecaoTotal[20].style.display === 'flex' ? orgntitulos[4].style.display='flex' : orgntitulos[4].style.display='none';

// TREINO DE PERNA / TITULO PERNA
treinosSelecaoTotal[21].style.display === 'flex' || treinosSelecaoTotal[22].style.display === 'flex'|| treinosSelecaoTotal[23].style.display === 'flex' || treinosSelecaoTotal[24].style.display === 'flex' || treinosSelecaoTotal[25].style.display === 'flex' || treinosSelecaoTotal[26].style.display === 'flex' || treinosSelecaoTotal[27].style.display === 'flex'|| treinosSelecaoTotal[28].style.display === 'flex' || treinosSelecaoTotal[29].style.display === 'flex' || treinosSelecaoTotal[30].style.display === 'flex' ? orgntitulos[5].style.display='flex' : orgntitulos[5].style.display='none';
}
    // // var cardDestaque = document.getElementsByClassName("exercicio");
    // // cardDestaque = Array.from(cardDestaque)

    // // for(let i = 0; i < cardDestaque.length; i++){
    // //     cardDestaque[i].classList.toggle('exercicio-escolhido');
    // // }
    // // if(cardDestaque == cardDestaque.classList);


// setInterval(alternarDestaque,1500);

// // const cardexercicio =[ ] 
// // function escolhido(){

// //     var cardDestaque = document.querySelector(".exercicio");
// //     cardDestaque = Array.from(cardDestaque)
// //     cardDestaque.classList.toggle("exercicio-escolhido")

// // }