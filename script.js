let numeroCartas = 0;
let contador = 0;

let contadorLocal = 0;
let contadorGlobal = 0;
let contadorCartasViradas = 0;

let gif1 = "";
let gif2 = "";

let telaDeVitoria = "";

numeroCartas = Number(prompt("Com quantas cartas gostaria de jogar?"));

while ((numeroCartas % 2) !== 0 || numeroCartas < 4 || numeroCartas > 14) {
        alert("Você só pode escolher números pares entre 4 e 14");
        numeroCartas = Number(prompt("Com quantas cartas gostaria de jogar?"));
       }
 //Reorganiza o layout caso o usuário queira 14 cartas (7 encima e 1 embaixo estava muito feio)      
    if (numeroCartas === 14) {
        let procura = document.querySelector(".cards");
        procura.classList.add("aumentado");
    }

    

//Embaralhando os gifs lembrando da quantidade total de cartas
    let todosGifs = ["/Imagens/bobrossparrot.gif", "/Imagens/explodyparrot.gif", "/Imagens/fiestaparrot.gif", "/Imagens/metalparrot.gif", "/Imagens/revertitparrot.gif", "/Imagens/tripletsparrot.gif", "/Imagens/unicornparrot.gif"];
    // Primeiramente embaralhamos o array total usando a função shuffle
    let shuffleGifs = shuffleArray(todosGifs);
    let cardGifs = [];
    //Usamos a função "for" para pegar apenas o número de gifs correspondentes ao número de cartas
    for (let i = 0; i < numeroCartas/2; i++) {
         cardGifs[i] = shuffleGifs[i];
    }
    //Agora concatenaremos o array consigo mesmo para que tenhamos 2 gifs iguais
    let cardGifs_Dobro = cardGifs.concat(cardGifs);
    //Ao final, embaralhamos denovo para eliminar o padrão de concatenação
    let arrayGifs = shuffleArray(cardGifs_Dobro);

//Insere a quantidade de cartas pedido pelo usuário e coloca as duas cartas uma encima da outra (front and back)
    while (contador < numeroCartas) {
        let procura = document.querySelector(".cards");
        procura.innerHTML = procura.innerHTML + 
        
     ` <div class="card" onclick="selecionar(this)">
            <div class="face front-face">
                <img src="/Imagens/front.png"/>
            </div>
            <div class="face back-face">
                <img src=${arrayGifs[contador]}>
            </div>
        </div>`;
        contador ++;
        }

// Função para randomizar array
function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
// Retornando array com aleatoriedade
    return arr;
}

// Vamos fazer agora a seleção de cartas colocando o efeito de segurar caso sejam a mesma e colocar um contador para o setar o número de jogadas
function selecionar(element) {

    element.classList.add("selecionado");
    contadorLocal ++;
    contadorGlobal ++;
    let procura = document.querySelector(".selecionado").querySelector(".front-face");
    procura.classList.add("front-face-efect");
    procura.classList.add(`frontAnalise${contadorLocal}`);

    procura = document.querySelector(".selecionado").querySelector(".back-face");
    procura.classList.add("back-face-efect");
    procura.classList.add(`backAnalise${contadorLocal}`);

    element.classList.remove("selecionado");

    if (contadorLocal === 2) {
         gif1 = document.querySelector(".backAnalise1").querySelector("img");
         gif2 = document.querySelector(".backAnalise2").querySelector("img");
        contadorLocal = 0;
    
        setTimeout(condicionais, 1000);
        }
}
//Função de comparação entre as imagens usadas
function condicionais(img1, img2) {
    img1 = gif1;
    img2 = gif2;
    if (img1.src !== img2.src) {
        
        let verificacao = document.querySelector(".backAnalise1");
        verificacao.classList.remove("back-face-efect");
        verificacao.classList.remove("backAnalise1");

        verificacao = document.querySelector(".backAnalise2");
        verificacao.classList.remove("back-face-efect");
        verificacao.classList.remove("backAnalise2");

        verificacao = document.querySelector(".frontAnalise1");
        verificacao.classList.remove("front-face-efect");
        verificacao.classList.remove("frontAnalise1");

        verificacao = document.querySelector(".frontAnalise2");
        verificacao.classList.remove("front-face-efect");
        verificacao.classList.remove("frontAnalise2");
    } else {
        let confimacao = document.querySelector(".backAnalise1");
        confimacao.classList.add("confimado");
        confimacao.classList.remove("backAnalise1");
        
        confimacao = document.querySelector(".backAnalise2");
        confimacao.classList.add("confimado");
        confimacao.classList.remove("backAnalise2");

        confimacao = document.querySelector(".frontAnalise1");
        confimacao.classList.add("confimado");
        confimacao.classList.remove("frontAnalise1");

        confimacao = document.querySelector(".frontAnalise2");
        confimacao.classList.add("confimado");
        confimacao.classList.remove("frontAnalise2");

        contadorCartasViradas += 2;
        verificacaoVitoria();
    }
}
function verificacaoVitoria() {
    if (contadorCartasViradas === numeroCartas) {
        alert (`PARABÉNS!! Você ganhou em ${contadorGlobal} jogadas!`);
        telaDeVitoria = document.querySelector(".vitoria");
        telaDeVitoria.classList.remove("inexistente");
       let refresh = prompt ("Você gostaria de jogar novamente??")
       if (refresh === "sim") {
           document.location.reload(false);
       } else {
            telaDeVitoria = document.querySelector(".container");
                telaDeVitoria.classList.add("opaca");
            telaDeVitoria = document.querySelector(".vitoria");
                telaDeVitoria.classList.remove("escondida");

       }
    }
}

function refresh () {
    document.location.reload(false);
}





