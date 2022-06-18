let quantidade;
let jogadas=0 ;
let acertos =0;
let frontParrot=["./images/bobrossparrot.gif","./images/explodyparrot.gif","./images/fiestaparrot.gif","./images/metalparrot.gif","./images/revertitparrot.gif","./images/tripletsparrot.gif","./images/unicornparrot.gif",]
let arrayParrot=[];

let cartaTemplate;
function comparador() { 
	return Math.random() - 0.5; 
}
function fimDeJogo(){
    if(acertos===quantidade){
        alert(`Voce ganhou em ${jogadas} jogadas! PARABENS`);
    }
}
function giraCarta(elemento){
    
    let primeiraCarta = document.querySelector(".primeira");
    jogadas++;
    if(primeiraCarta !== null){
        if(primeiraCarta!==elemento){
            elemento.classList.add("segunda");
            elemento.classList.add("flip");           
        }else{
            alert('Escolha cartas diferentes');
        }
    }
    else {
    elemento.classList.add("primeira");
    elemento.classList.add("flip");
}
setTimeout(comparaCarta, 1000);
}
function comparaCarta(){
    let primeiraCarta = document.querySelector(".primeira");
    let segundaCarta = document.querySelector(".segunda");
    if(primeiraCarta.querySelector(".front").src === segundaCarta.querySelector(".front").src){
        primeiraCarta.removeAttribute("onclick");
        segundaCarta.removeAttribute("onclick");
        acertos=acertos +2;
        console.log(acertos,quantidade);
        if(acertos===Number(quantidade)){
            alert(`Voce ganhou em ${jogadas} jogadas!`);
        }
    }else{
        primeiraCarta.classList.remove("flip");
        segundaCarta.classList.remove("flip");   
    }
    primeiraCarta.classList.remove("primeira");
    segundaCarta.classList.remove("segunda");
    
}

function quantidadeCarta(){
        quantidade=prompt("Quantas cartas você quer jogar? Min:4 Max:14")
    while((quantidade<4)||(quantidade>14)||(quantidade%2!=0)||(isNaN(quantidade)==true)){
        quantidade=prompt("Quantas cartas você quer jogar? Min:4 Max:14");
    }
    let contador=0;
    for(let i=0; i<quantidade; i++){
        if(i>0&&i%2===0){
            contador++;
        }
        cartaTemplate = 
        `
        <div class="cartaMemoria " onclick="giraCarta(this)">
        <img class="front "src=${frontParrot[contador]}>
        <img class="back" src="./images/front.png" >
        
        </div>
        `
        arrayParrot.push(cartaTemplate);     
    }
    arrayParrot.sort(comparador);
    for(let i=0;i<arrayParrot.length;i++){
        document.querySelector(".tabuleiro").innerHTML += arrayParrot[i];
    }
}
quantidadeCarta();


