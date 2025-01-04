// Variables
/* const formulario = document.querySelector('#contenido-principal') */
let arrayGastos = [];

// Events
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', validateAnswer);
    document.querySelector('button[type="submit"]').addEventListener('click',readValue);
}

// Classes
class Calculos {
    constructor (restante,cantidad) {
        this.restante = restante;
        this.cantidad = cantidad;
    }

    // Methods




}

// Functions
function validateAnswer(){ // Validate the prompt answer
    let answer = Number(prompt ('¿Cuánto es el presupuesto?'));
    const restante = document.querySelector('.restante span');
    const presupuesto = document.querySelector('.presupuesto span');

    if (answer == 0 || isNaN(answer)) {
        window.location.reload()
        return;
    } 
    presupuesto.textContent = answer;
    restante.textContent = answer;
}



function readValue(e) { // Read the cost that we agregate
    e.preventDefault(); // Prevent the default action of the button
    const gasto = document.querySelector('input#gasto').value;
    const cantidad = document.querySelector('input#cantidad').value;

    
    console.log(gasto,cantidad);
};
