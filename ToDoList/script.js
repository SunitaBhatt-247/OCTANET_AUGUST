function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const taskItem = document.createElement("li");
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString();

    taskItem.innerHTML = `
      <span class="taskNumber" onclick="toggleTask(this)">✓</span>
      ${taskInput.value} 
      <span class="time">${formattedTime}</span>
      <button onclick="removeTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";

    // Show pop-up message
    showPopup("Task added!");
  }
}

function removeTask(button) {
  const taskList = document.getElementById("taskList");
  const taskItem = button.parentNode;
  taskList.removeChild(taskItem);
}

function toggleTask(span) {
  span.innerText = span.innerText === '✓' ? '' : '✓';
}