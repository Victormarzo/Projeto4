let quantidade;
let front=["./images/coquinha.jpeg","./images/cha.jpeg","./images/frango.jpeg","./images/macarrao.jpeg","./images/mousse.jpeg","./images/parmegiana.jpeg","./images/petit.jpeg",];
let frontParrot=["./images/bobrossparrot.gif","./images/explodyparrot.gif","./images/fiestaparrot.gif","./images/metalparrot.gif","./images/revertitparrot.gif","./images/tripletsparrot.gif","./images/unicornparrot.gif",]
let arrayParrot=[];
let cartaTemplate;
function comparador() { 
	return Math.random() - 0.5; 
}
function giraCarta(elemento){
    elemento.classList.add("flip");
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
        <div class="cartaMemoria" onclick="giraCarta(this)">
        <img class="front"src=${front[contador]}>
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


