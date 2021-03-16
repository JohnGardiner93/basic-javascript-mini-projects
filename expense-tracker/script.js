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
// Variables
const inputDescription = document.getElementsByName(`Expense Description`);
const inputAmount = document.getElementsByName(`Expense Amount`);
const inputDate = document.getElementsByName(`Expense Date`);
const btnSubmit = document.querySelector(`.btn--submit`);
const btnClearForm = document.querySelector(`.btn--clear-form`);
const tableBody = document
  .querySelector(`.expense-table`)
  .getElementsByTagName(`tbody`)[0];

let idSet = Array(100)
  .fill()
  .map((_, index) => index);
////////////////////////////////////////////
// Class declarations
// Expenses
class Expense {
  #id;
  #description;
  #amount;
  #date;

  constructor(description, amount, date) {
    this.#description = description;
    this.#amount = amount;
    this.#date = date;
    this.#id = idSet.shift();
  }
}

////////////////////////////////////////////
// Functions
const removeExpense = function (id) {
  document.getElementById(id).remove();
};

const clearForm = function () {};

////////////////////////////////////////////
// Event Listeners
btnClearForm.addEventListener(`click`, clearForm);

////////////////////////////////////////////
// Initialize
console.log(`Expense Tracker`);

////////////////////////////////////////////
// Testing
const testExpense = new Expense(`Test`, 40.0, `4 / 3 / 06`);
const testExpense2 = new Expense(`Test 2`, 40.0, `4 / 3 / 06`);
console.log(testExpense);
console.log(testExpense2);
