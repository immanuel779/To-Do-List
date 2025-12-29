// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create new task elements
  const newTask = document.createElement('li');
  newTask.className = 'task';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-checkbox';

  const label = document.createElement('label');
  label.textContent = taskText;

  // Append checkbox and label to the new task
  newTask.appendChild(checkbox);
  newTask.appendChild(label);

  // Append new task to the list
  taskList.appendChild(newTask);

  // Clear the input field
  taskInput.value = '';
}

// Add task on button click
addTaskButton.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});