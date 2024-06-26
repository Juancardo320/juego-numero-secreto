let rango = 10;
let numAleatorio = 0;
let numerosSorteados = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario === numAleatorio){
        asignarTextoElemento('p', `¡Acertaste! te tomo ${contador} ${(contador == 1) ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('cajaIntento').setAttribute('disabled', true);
    }else {
        if (numeroUsuario > numAleatorio) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        contador++;
        limpiarCaja();
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Escoge un número del 1 al ${rango}`);
    contador = 1;
    numAleatorio = generarNumeroSecreto();
    document.getElementById('cajaIntento').removeAttribute('disabled');
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*rango)+1;
    // se juega hasta que se agreguen todos los numeros al array
    if(numerosSorteados.length == rango){
        asignarTextoElemento('p', `Juego terminado. Ve a que te de el sol`);
    } else{
        if(numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    document.getElementById("valorUsuario").value = "";
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute("disabled", true);
}

condicionesIniciales();