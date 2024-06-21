let numeroSecreto = generarNumeroAleatorio();
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroDeUsuario) {
        asignarTextoElemento('p',`¡Felicidades! ¡Adivinaste el número secreto en ${intentos} ${(intetos ===1) ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','¡Intenta nuevamente! El número secreto es menor');
        } else {
            asignarTextoElemento('p','¡Intenta nuevamente! El número secreto es mayor');
        }
    }
    limpiarCampo();
    intentos++;
}

function limpiarCampo() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if (listaNumerosSorteados.length === numeroMaximo) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;}
}

function mensajesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!'); // Llamamos a la función
    asignarTextoElemento('p',`Intenta adivinar el número secreto entre 1 y ${numeroMaximo}`); // Llamamos a la función

}

function reiniciarJuego() {
    limpiarCaja();

    mensajesIniciales();

    numeroSecreto = generarNumeroAleatorio();
    intentos = 0;

    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

mensajesIniciales(); // Llamamos a la función
