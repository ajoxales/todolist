let tasks = [];

function addTask() {
  document.getElementById("taskList").style.display = "block";

  let task = document.getElementById("task").value;

  if (task !== "") {
    tasks.push(task);
    let listItem = document.createElement("li");
    listItem.className = "task";
    listItem.textContent = tasks;
    let taskList = document.getElementById("taskList");
    taskList.appendChild(listItem);

    document.getElementById("task").value = "";
  } else {
    alert("Please input a task.");
  }

  tasks.pop();
  listItem.textContent = "";
}
