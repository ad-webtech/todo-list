document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add-task");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Add new task
  addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.classList.add("task");

    li.innerHTML = `
  <span>${taskText}</span>
  <div>
    <button class="complete-btn"><i class="fas fa-check"></i></button>
    <button class="delete-btn"><i class="fas fa-trash"></i></button>
  </div>
`;


    taskList.appendChild(li);
    taskInput.value = "";
  });

  // Handle complete and delete actions using event delegation
  taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      e.target.closest("li").remove();
    }

    if (e.target.classList.contains("complete-btn")) {
      e.target.closest("li").classList.toggle("completed");
    }
  });
});
