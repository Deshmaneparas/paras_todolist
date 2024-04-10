document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addButton").addEventListener("click", function () {
      var taskInput = document.getElementById("taskInput");
      var taskList = document.getElementById("taskList");
  
      if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
  
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "- DELETE TASK";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", function () {
          li.remove();
        });
  
        li.appendChild(deleteButton);
        taskList.appendChild(li);
  
        taskInput.value = "";
      }
    });
  });
  