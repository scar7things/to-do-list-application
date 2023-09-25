function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  
  if (taskInput.value === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    ${taskInput.value} 
    <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

function deleteTask(button) {
  const taskList = document.getElementById('taskList');
  taskList.removeChild(button.parentElement);
}
