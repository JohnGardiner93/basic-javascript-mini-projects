'use strict';

/*
// Program
Basic Feature List:
- Input Fields:
  - Description
  - Date
  - Amount
- Show expenses in table
- Be able to delete expenses in table

--- Checklist ---
Page-Setup:
✅ - Define basic heading information
✅ - Text input
✅ - Date input
✅ - Amount input
✅ - Submit button
✅ - Clear form button
✅ - Table for expenses
✅ - Expense row in table
✅ - Checkbox to delete row

Program Flow:
1. User information captured from inputs including expense description, date, and amount.
2. User submits expense information
3. Information is validated in some fashion
4. Expenses added to expenses array
5. Expenses are displayed on page
6. User can delete expenses one at a time
7. User can clear form at any point using a "Clear Form" button
*/

////////////////////////////////////////////
// Class declarations
// Expenses
class Expense {
  #id;
  description;
  amount;
  date;

  constructor(description, amount, date) {
    this.description = description;
    this.amount = amount;
    this.date = date;
    this.#id = idSet.shift();
  }
}

////////////////////////////////////////////
// Variables
const form = document.querySelector(`.form`);
const inputDescription = document.getElementsByName(`Expense Description`)[0];
const inputAmount = document.getElementsByName(`Expense Amount`)[0];
const inputDate = document.getElementsByName(`Expense Date`)[0];
const btnSubmit = document.querySelector(`.btn--submit`);
const btnClearForm = document.querySelector(`.btn--clear-form`);
const tableBody = document
  .querySelector(`.expense-table`)
  .getElementsByTagName(`tbody`)[0];

let idSet = Array(100)
  .fill()
  .map((_, index) => index);

////////////////////////////////////////////
// Testing

class ExpenseApp {
  #expenses = [];

  constructor() {
    // Add Event Listeners
    btnClearForm.addEventListener(`click`, this.clearForm.bind(this));
    btnSubmit.addEventListener(`click`, this.submitForm.bind(this));

    console.log(`Expense Tracker`);
  }

  removeExpense(id) {
    document.getElementById(id).remove();
  }

  clearForm() {
    inputDescription.value = inputAmount.value = inputDate.value = '';
  }

  submitForm(e) {
    e.preventDefault();

    // Capture inputs
    const description = inputDescription.value;
    const amount = inputAmount.value;
    const date = inputDate.value;

    // Validate inputs against guard clause
    if (!description || !amount || !date) return;

    // Clear Form
    this.clearForm();

    // Display error message

    // Create expense object
    const expense = new Expense(description, amount, date);

    // Add expense object to expenses array
    this.#expenses.push(expense);

    // Add expense to expense table

    console.log(expense);
    console.log(this.#expenses);
  }
}

const expenseApp = new ExpenseApp();
