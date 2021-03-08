'use strict';
// To-do App
console.log(`To-Do App`);

// console.log(
//   `text box height:`,
//   document.querySelector(`.text-input`).getBoundingClientRect().height
// );
// console.log(
//   `button height:`,
//   document.querySelector(`.button`).getBoundingClientRect().height
// );

// console.log(`bean`);

/*
Basic Feature List:
- Enter text into a field
- Submit task
- Display task on page amongst other tasks
- Check off and/or delete tasks
- Clear all tasks at once

-- Checklist -- 
Page Setup
🟢 - Put a textbox onto the HTML page
🟢 - Put a submit button on the HTML age
🟢 - Put a clear all button on the HTML page
🟢 - Put an task list on the HTML page
🟢 - Put a complete button with each task item
🟢 - Put a delete button with each task item

Program

1. Capture text from text input when the submit button is pressed

2. Add the text, a check button, and a delete button to the bottom of the unordered list

3. If the user presses the check button, strikethrough the items on the list and remove the submit button

4. If the user presses the delete button, remove the task from the list.

5. If the user presses the clear all button, remove all tasks from the list.

*/

// Create variables
const inputText = document.querySelector(`.text-input`);
const btnSubmit = document.querySelector(`.btn--submit`);
const btnClearAll = document.querySelector(`.btn--clear-all`);
const taskContainer = document.querySelector(`.container--task-list`);
const tasks = [];

// Constants
const completeTaskButton = document.createElement(`span`);
const deleteTaskButton = document.createElement(`span`);
completeTaskButton.textContent = `✅`;
deleteTaskButton.textContent = `❌`;

// Functions

const createTaskElement = function () {};

const addTask = function () {
  // Add task to tasks array
  const task = {
    taskDescription: inputText.value,
    showCompleteButton: true,
    showDeleteButton: true,
    taskComplete: false,
  };

  tasks.push(task);

  // NOT WORKING YET

  // Create task element
  const taskEl = document.createElement(`span`);
  taskEl.textContent = task.taskDescription;

  // Build task row element
  const taskRowEl = document.createElement(`div`);
  taskRowEl.insertAdjacentHTML(`beforeend`, taskEl);
  taskRowEl.insertAdjacentHTML(`beforeend`, completeTaskButton);
  taskRowEl.insertAdjacentHTML(`beforeend`, deleteTaskButton);

  console.log(taskRowEl);

  // Add task to task list on page
  taskContainer.insertAdjacentElement(`beforeend`, taskRowEl);
};

const clearAllTasks = function () {};

const completeTask = function () {};

const deleteTask = function () {};

// Initialize

clearAllTasks();

// Add event listeners

btnSubmit.addEventListener(`click`, addTask);

btnClearAll.addEventListener(`click`, clearAllTasks);
