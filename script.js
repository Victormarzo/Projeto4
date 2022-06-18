let quantidade;
let front=["./images/coquinha.jpeg","./images/cha.jpeg","./images/frango.jpeg","./images/macarrao.jpeg","./images/mousse.jpeg","./images/parmegiana.jpeg","./images/petit.jpeg",];
let frontParrot=["./images/bobrossparrot.gif","./images/explodyparrot.gif","./images/fiestaparrot.gif","./images/metalparrot.gif","./images/revertitparrot.gif","./images/tripletsparrot.gif","./images/unicornparrot.gif",]
let parrot=["bobross","explody","fiesta","metal","revertit","triplets","unicorn"]
let arrayParrot=[];
let arraycompara=[];
let cartaTemplate;
function comparador() { 
	return Math.random() - 0.5; 
}
function giraCarta(elemento){
    
    let primeiraCarta = document.querySelector(".primeira");
    
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
setTimeout(comparaCarta, 2000);
}
function comparaCarta(){
    let primeiraCarta = document.querySelector(".primeira");
    let segundaCarta = document.querySelector(".segunda");
    if(primeiraCarta.querySelector(".front").src ===segundaCarta.querySelector(".front").src){
        primeiraCarta.removeAttribute("onclick");
        segundaCarta.removeAttribute("onclick");
    }else{
        primeiraCarta.classList.remove("flip");
        segundaCarta.classList.remove("flip");
        console.log("Deu");
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
        <div class="cartaMemoria ${parrot[contador]}" onclick="giraCarta(this)">
        <img class="front "src=${frontParrot[contador]}>
        <img class="back" src="./images/front.png" >
        
        </div>
        `
        arrayParrot.push(cartaTemplate);
           
    }
    //arrayParrot.sort(comparador);
    for(let i=0;i<arrayParrot.length;i++){
        document.querySelector(".tabuleiro").innerHTML += arrayParrot[i];
    }
}

quantidadeCarta();


