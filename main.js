// main.js

// Select the form and the input field
const taskForm = document.getElementById('task');
const taskInput = document.getElementById('single-task');

// Select the main div where tasks will be displayed
const taskList = document.createElement('ul');
document.getElementById('main').appendChild(taskList);

// Add an event listener to handle form submission
taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the value of the input field
    const taskValue = taskInput.value.trim();
    
    // Only add the task if it's not empty
    if (taskValue) {
        // Create a new list item for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskValue;
        
        // Create a button to remove the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.style.marginLeft = '10px';

        // Add an event listener to the remove button
        removeButton.addEventListener('click', function() {
            taskList.removeChild(listItem); // Remove the task from the list
        });

        // Append the button to the list item and add it to the list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field after adding the task
        taskInput.value = '';
    }
});