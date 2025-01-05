# expensesCalculation

This project provides a code for a budget management application. The application allows users to input their budget, add expenses, and dynamically update the remaining budget.

## Variables and Selectors

- `formulario`: Selects the form element with the ID `agregar-gasto`.
- `gastosListado`: Selects the `ul` element within the `#gastos` ID.

## Event Listeners

The `eventListeners` function sets up the following event listeners:

- `DOMContentLoaded`: Calls `preguntarPresupuesto` to prompt the user for their budget.
- `submit`: Listens for form submission to add a new expense via the `agregarGasto` function.
- `click`: Listens for clicks on `gastosListado` to handle expense deletion via `eliminarGasto`.

## Classes

### Presupuesto Class

Manages the budget and expenses:

- `constructor(presupuesto)`: Initializes `presupuesto`, `restante`, and `gastos`.
- `nuevoGasto(gasto)`: Adds a new expense and recalculates the remaining budget.
- `eliminarGasto(id)`: Removes an expense by ID and recalculates the remaining budget.
- `calcularRestante()`: Calculates the remaining budget based on total expenses.

### UI Class

Handles UI updates:

- `insertarPresupuesto(cantidad)`: Updates the DOM with the total and remaining budget.
- `imprimirAlerta(mensaje, tipo)`: Displays an alert message.
- `agregarGastoListado(gastos)`: Adds expenses to the DOM and creates delete buttons for each expense.
- `actualizarRestante(restante)`: Updates the remaining budget in the DOM.
- `comprobarPresupuesto(presupuestoObj)`: Checks the remaining budget and changes its display color based on thresholds. Disables the submit button if the budget is exhausted.
- `limpiarHTML()`: Clears the expenses list in the DOM.

## Functions

### preguntarPresupuesto()

Prompts the user to enter their budget. If the input is invalid, the page reloads. Initializes a new `Presupuesto` object and updates the UI with the initial budget.

### agregarGasto(e)

Handles the addition of a new expense:

- Prevents the default form submission.
- Reads the expense name and amount from the form.
- Validates the inputs and displays appropriate alerts.
- Adds the expense to the budget, updates the UI, and resets the form.

### eliminarGasto(e)

Handles the deletion of an expense:

- Checks if the delete button was clicked.
- Removes the expense from the `Presupuesto` object.
- Updates the remaining budget and the UI.
- Removes the expense element from the DOM.

This application helps users manage their budget by tracking expenses and updating the remaining budget dynamically.

ponlo en Rmarkdown para poder copiar

