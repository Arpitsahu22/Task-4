// Get HTML elements

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");
const taskCount = document.getElementById("taskCount");
const clearBtn = document.getElementById("clearBtn");

// Retrieve tasks from localStorage

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save tasks

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

// Display tasks

function displayTasks() {

    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        let li = document.createElement("li");

        li.className = "task-item";

        let span = document.createElement("span");

        span.innerText = tasks[i].text;
        span.className = "task-text";

        if (tasks[i].completed) {
            span.classList.add("completed");
        }

        // Task buttons

        let actions = document.createElement("div");
        actions.className = "task-actions";

        let completeBtn = document.createElement("button");

        completeBtn.innerText = tasks[i].completed
            ? "Undo" : "Complete";

        completeBtn.className = "complete-btn";

        completeBtn.addEventListener("click", function() {

            tasks[i].completed = !tasks[i].completed;

            saveTasks();
            displayTasks();

        });

        let deleteBtn = document.createElement("button");

        deleteBtn.innerText = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function() {

            tasks.splice(i, 1);

            saveTasks();
            displayTasks();

        });

        actions.appendChild(completeBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actions);

        taskList.appendChild(li);

    }

    taskCount.innerText = "Total Tasks: " + tasks.length;

}

// Add new task

addBtn.addEventListener("click", function() {

    let task = taskInput.value.trim();

    if (task === "") {

        message.innerText = "Please enter a task!";
        message.style.color = "red";

        return;
    }

    tasks.push({
        text: task,
        completed: false
    });

    saveTasks();

    taskInput.value = "";

    message.innerText = "Task added successfully!";
    message.style.color = "green";

    displayTasks();

});

// Add task using Enter key

taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addBtn.click();
    }

});

// Clear all tasks

clearBtn.addEventListener("click", function() {

    if (tasks.length === 0) {
        message.innerText = "No tasks to clear!";
        message.style.color = "red";
        return;
    }

    tasks = [];

    saveTasks();
    displayTasks();

    message.innerText = "All tasks deleted!";
    message.style.color = "green";

});

// Display saved tasks when page loads

displayTasks();
