// Variables
const form = document.querySelector('#agregar-gasto');
const addExpenses = document.querySelector('.list-group');
const btnAdd=document.querySelector('button[type="submit"]');


// Events
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', validateAnswer);
    btnAdd.addEventListener('click',addList);
}

// Classes
class Calc {
    constructor (expenses) {
        this.expenses = Number(expenses);
        this.rest = Number(expenses);
        this.arrayExpenses = [];
    }

    // Methods
    addExpensesList (object){
        this.arrayExpenses=[...this.arrayExpenses,object];      
        this.setRest();
    }

    setRest (){
        const finalTotal = this.arrayExpenses.reduce( (total, expense) => {
            return total + expense.quantity;
        },0)
        this.rest = this.expenses - finalTotal;        
    }

    removeExpense (idNew) {        
        ui.printAlert('Gasto eliminado correctamente','correcto')
        this.arrayExpenses = this.arrayExpenses.filter(expense => expense.id !== idNew);

        ui.printList(this.arrayExpenses);

        this.setRest();

        ui.printNewRest(this.rest);

        ui.checkExpenses(this)
    }

}

class UI {
    insertarDatos (quantity) {
        const {expenses, rest} = quantity;
        document.querySelector('#total').textContent = expenses;
        document.querySelector('#restante').textContent = rest;
    }
    
    printAlert (message,type){
        const br = document.createElement('br');
        const elementMessage=document.createElement('DIV');
        elementMessage.classList.add('text-center', 'alert');

        if (type==='error') {
            elementMessage.classList.add('alert-danger');
        } else {
            elementMessage.classList.add('alert-success');
        }

        elementMessage.textContent=message;
        document.querySelector('.primario').appendChild(br);
        document.querySelector('.primario').appendChild(elementMessage);
        
        setTimeout(() => {
            br.remove();
            elementMessage.remove();
        }, 3000);
    }
    
    printList (array) {
        clearHTML();
        array.forEach((item) => {
            const element = document.createElement('LI');
            element.className = 'list-group-item d-flex justify-content-between align-items-center';
            const {id, expense, quantity} = item;
            element.dataset.id=id;
            element.textContent = `
                ${expense}: $ ${quantity} 
                    `

            const button = document.createElement('BUTTON');
            button.classList.add('btn','btn-danger','borrar-expense');
            button.textContent='Borrar X';
            button.onclick = () => {
                finalExpenses.removeExpense(id);
            };

            element.appendChild(button);
            addExpenses.appendChild(element);     
        })
    }

    printNewRest (rest) {
        document.querySelector('#restante').textContent = rest;
    }

    checkExpenses(expensesObj){
        const {expenses, rest} = expensesObj;
        
        const classRest = document.querySelector('.restante');

        if(rest < (0.5*expenses)){
            classRest.classList.remove('alert-success', 'alert-warning');
            classRest.classList.add('alert-danger');
        } else if (rest < (0.75*expenses)) {
            classRest.classList.remove('alert-success', 'alert-danger');
            classRest.classList.add('alert-warning');
        } else {
            classRest.classList.remove('alert-warning','alert-danger');
            classRest.classList.add('alert-success');
        }

        if (rest <= 0){
            ui.printAlert('There is no money left','error');
            btnAdd.disabled=true;
            return;
        }
        btnAdd.disabled=false;

    }


}

const ui = new UI();
let finalExpenses;

// Functions
function validateAnswer(){ // Validate the prompt answer
    
    let answer = Number(prompt ('How much is the budget?'));

    if (answer <= 0 || isNaN(answer)) {
        window.location.reload();
        return;
    } 
    finalExpenses = new Calc(answer);
    ui.insertarDatos(finalExpenses);
}

function addList (e) {
    e.preventDefault();
    
    const id = Math.random();
    const expense = document.querySelector('input#gasto').value;
    const quantity = Number(document.querySelector('input#cantidad').value);

    if (expense === '' || quantity === ''){
        ui.printAlert("Ambos campos son obligatorios", 'error');
    } else if (quantity <= 0 || isNaN(quantity)) {
        ui.printAlert("La quantity debe ser un NÚMERO mayor a 0", 'error');
    } else {
        ui.printAlert("Gasto agregado", 'correcto'); 
    }

    const object = { id, expense, quantity }   
    finalExpenses.addExpensesList(object); 
    form.reset();   

    ui.printList(finalExpenses.arrayExpenses);
    ui.printNewRest(finalExpenses.rest);

    ui.checkExpenses(finalExpenses);
}

function clearHTML(){
    while(addExpenses.firstChild){
        addExpenses.removeChild(addExpenses.firstChild);
    }
}



/* > < */