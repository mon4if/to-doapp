let todos = [];

function renderList() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach((task, index) => {
    list.innerHTML += `
      <li>
        ${task}
        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
      </li>
    `;
  });
}

function addTask() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();

  if (task !== "") {
    todos.push(task);
    input.value = "";
    renderList();
  } else {
    alert("Please enter a task.");
  }
}

function deleteTask(index) {
  todos.splice(index, 1);
  renderList();
}
