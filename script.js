let numeroCartas = 0;
let contador = 0;

//Para esperar a página carregar antes de aparecer o prompt
//setTimeout(function numeroDeCartas() {
    numeroCartas = prompt("Com quantas cartas gostaria de jogar?");

    while ((numeroCartas % 2) !== 0 || numeroCartas < 4 || numeroCartas > 14) {
        alert("Você só pode escolher números pares entre 4 e 14");
        numeroCartas = prompt("Com quantas cartas gostaria de jogar?");
       }
 //Reorganiza o layout caso o usuário queira 14 cartas (7 encima e 1 embaixo estava muito feio)      
    if (numeroCartas == 14) {
        let procura = document.querySelector(".cards");
        procura.classList.add("aumentado");
    }

//Insere a quantidade de cartas pedido pelo usuário e coloca as duas cartas uma encima da outra (front and back)
while (contador < numeroCartas) {
    let procura = document.querySelector(".cards");
    procura.innerHTML = procura.innerHTML + 

    `
        <div class="carta">
            <div class="carta-front" onclick="selecionar(this)">
                <img src="/Imagens/front.png"/>
            </div>
            <div class="carta-back" onclick="selecionar(this)">
            <img src="/Imagens/bobrossparrot.gif"/>
            </div>
        </div>`;
    contador++;
    
}
function selecionar (element) {

    element.classList.add("rotate");

}






