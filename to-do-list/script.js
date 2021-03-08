'use strict';
// To-do App
console.log(`To-Do App`);

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

////////////////////////////////////////////
// Create variables
const inputText = document.querySelector(`.text-input`);
const btnSubmit = document.querySelector(`.btn--submit`);
const btnClearAll = document.querySelector(`.btn--clear-all`);
const taskContainer = document.querySelector(`.container--task-list`);
let tasks = [];

////////////////////////////////////////////
// Functions
// Element Creation
const createTaskElement = function (taskDescription) {
  const taskEl = document.createElement(`span`);
  taskEl.textContent = taskDescription;
  taskEl.classList.add(`task`);
  return taskEl;
};

const createCompleteButtonElement = function () {
  const completeTaskButton = document.createElement(`span`);
  completeTaskButton.textContent = `✅`;
  completeTaskButton.classList.add(`.btn--complete-task`);
  return completeTaskButton;
};

const createDeleteButtonElement = function () {
  const deleteTaskButton = document.createElement(`span`);
  deleteTaskButton.textContent = `❌`;
  deleteTaskButton.classList.add(`btn--delete-task`);
  return deleteTaskButton;
};

const createTaskRowElement = function (taskElement) {
  const taskRowEl = document.createElement(`div`);
  taskRowEl.insertAdjacentElement(`beforeend`, taskElement);
  taskRowEl.insertAdjacentElement(`beforeend`, createCompleteButtonElement());
  taskRowEl.insertAdjacentElement(`beforeend`, createDeleteButtonElement());
  taskRowEl.classList.add(`task-row`);
  return taskRowEl;
};

// Page Functions
const addTasktoPage = function () {
  // Validate input
  if (!inputText.value) {
    // Create task object
    const task = {
      taskDescription: inputText.value,
      showCompleteButton: true,
      showDeleteButton: true,
      taskComplete: false,
    };

    // Add task object to tasks array
    tasks.push(task);

    // Create task element
    const taskEl = createTaskElement(task.taskDescription);

    // Create task row element
    const taskRowEl = createTaskRowElement(taskEl);

    // Add task to task list on page
    taskContainer.insertAdjacentElement(`beforeend`, taskRowEl);

    // Clear entry form
    inputText.value = ``;

    // Add border if there is not one
    if (taskContainer.style.border === `none`) {
      taskContainer.style.border = `2px solid gray`;
    }
  }

  // Focus back onto input text
  inputText.focus();
};

// DO I NEED THIS?
const updateTaskListView = function () {
  taskContainer.querySelectorAll(`.task-row`).forEach((el, i) => el.remove());

  // ADD
  // Read through tasks array and put each task item on the page
};

const clearAllTasks = function () {
  tasks = [];
  updateTaskListView();

  // Remove border so that no artifacts are left behind in empty list
  taskContainer.style.border = `none`;
};

const completeTask = function () {
  // Put strike-through line on text of task
  // Update task array to reflect status
  // Change and/or remove complete button
};

const deleteTask = function () {
  // Remove task row from task container
  // Remove task from task array
};

////////////////////////////////////////////
// Initialization
clearAllTasks();

////////////////////////////////////////////
// Add event listeners

// Enter key
inputText.addEventListener(`keydown`, function (e) {
  // Must be keydown to prevent doublefire when pressing enter on submit button
  if (e.key === `Enter` && document.activeElement == inputText) {
    addTasktoPage();
  }
});

// Submit Button
btnSubmit.addEventListener(`click`, addTasktoPage);

// Clear All Button
btnClearAll.addEventListener(`click`, clearAllTasks);
