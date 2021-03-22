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
  description;
  amount;
  date;

  constructor(description, amount, date) {
    this.description = description;
    this.amount = amount;
    this.date = date;
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
const table = tableBody.closest(`table`);

console.log(tableBody);

////////////////////////////////////////////
// Testing

class ExpenseApp {
  #expenses = [];
  #idSet;
  fakeExpenses = [];

  constructor() {
    // Add Event Listeners
    btnClearForm.addEventListener(`click`, this._clearForm.bind(this));
    btnSubmit.addEventListener(`click`, this._submitForm.bind(this));
    this.#idSet = Array(1000)
      .fill()
      .map((_, index) => index + 1);

    console.log(`Expense Tracker`);
  }

  _removeExpenseOLD(id) {
    console.log(`Removing id: `, id);
    // Select table rows with data (those that have dataset id's)
    const [...liveExpenses] = tableBody.querySelectorAll(`tr[data-id]`);

    // Find the requested expense in the table
    const expenseEl = liveExpenses.filter(obj => +obj.dataset?.id === id);

    // Check that an expense was actually found
    if (expenseEl.length === 0) return;

    // console.log(`Expense arry pre-cut`, this.#expenses);
    // Find and remove the selected expense from the expense array
    this.#expenses.splice(this.#expenses.findIndex(obj => +obj.id === id));

    // console.log(`Expense arry post-cut`, this.#expenses);

    // Remove the selected expense from the table
    expenseEl[0].remove();
  }

  _removeExpense(el) {
    console.log(`Removing id: `, el.dataset.id);
    // Select table rows with data (those that have dataset id's)
    // const [...liveExpenses] = tableBody.querySelectorAll(`tr[data-id]`);

    // Find the requested expense in the table
    // const expenseEl = liveExpenses.filter(obj => +obj.dataset?.id === id);

    // Check that an expense was actually found
    // if (expenseEl.length === 0) return;

    // console.log(`Expense arry pre-cut`, this.#expenses);
    // Find and remove the selected expense from the expense array
    this.#expenses.splice(
      this.#expenses.findIndex(obj => +obj.id === el.dataset.id)
    );

    // console.log(`Expense arry post-cut`, this.#expenses);

    // Remove the selected expense from the table
    el.remove();
  }

  _clearForm() {
    inputDescription.value = inputAmount.value = inputDate.value = '';
  }

  _submitForm(e) {
    if (e) e.preventDefault();

    // Capture inputs
    const description = inputDescription.value;
    const amount = +inputAmount.value;
    const date = inputDate.value;

    console.log(`inputs are: `, description, amount, date);

    // Validate inputs against guard clause
    if (!description || !amount || !date || !(amount > 0)) {
      // Display error message
      console.error(`Inputs are not valid`);
      return;
    }

    // Format date once confirmed to be valid
    const formattedDate = this._formatDate(date);

    // Clear Form
    this._clearForm();

    // Create expense object
    const expense = new Expense(description, amount, formattedDate);
    // Assign ID to object
    expense.id = this._generateIDNumber();
    // Add expense object to expenses array
    this.#expenses.push(expense);

    // Add expense to expense table
    const expenseEl = this._generateExpenseElement(expense);
    this._addExpenseToTable(expenseEl);

    // console.log(expense);
  }

  _formatDate(date) {
    return new Intl.DateTimeFormat(`en-US`).format(Date.parse(date));
  }

  _clearAllExpenses() {
    // Clear expenses array
    this.#expenses = [];

    // Clear expense table
    this._clearExpenseTable();
  }

  _clearExpenseTable() {
    const blankTableBody = `
      <tbody>
        <tr>
          <td class="header id">ID</td>
          <td class="header expense">Expense</td>
          <td class="header amt">Amount</td>
          <td class="header date">Date</td>
          <td class="header delete"></td>
        </tr>
      </tbody>
      `;

    tableBody.innerHTML = blankTableBody;
  }

  _generateIDNumber() {
    return this.#idSet.shift();
  }

  _generateExpenseElement(expense) {
    const html = `
        <tr data-id="${this._stringifyID(expense.id)}">
          <td>${this._stringifyID(expense.id)}</td>
          <td>${expense.description}</td>
          <td>$${this._stringifyAmount(expense.amount)}</td>
          <td>${expense.date}</td>
          <td class="btn--delete-row">❌</td>
        </tr>
     `;

    return html;
  }

  _addExpenseToTable(expenseEl) {
    tableBody.insertAdjacentHTML(`beforeend`, expenseEl);
    const newRowEl = tableBody.lastElementChild;
    console.log(newRowEl);
    newRowEl.addEventListener(
      `click`,
      this._removeExpense.bind(this, newRowEl)
    );
  }

  _stringifyID(id) {
    // Add padding to string for pleasing appearance ("003")
    return `${id}`.padStart(3, `0`);
  }

  _stringifyAmount(amt) {
    // Convert amount to string
    let strAmt = `` + amt;

    // If the provided number does not have a decimal place, add a decimal and zeroes
    if (!strAmt.includes(`.`)) strAmt += `.00`;

    return strAmt;
  }
}

const expenseApp = new ExpenseApp();

////////////////////////////////////////////
// Test inputs

expenseApp._clearAllExpenses();
inputDescription.value = `Test1`;
inputAmount.value = 34;
inputDate.value = `1990-03-18`;
expenseApp._submitForm();
// expenseApp._removeExpense(1);
inputDescription.value = `Test2`;
inputAmount.value = 34;
inputDate.value = `2021-03-18`;
expenseApp._submitForm();
