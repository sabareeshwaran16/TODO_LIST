function addTask() {
    const input = document.getElementById("taskInput");
    const category = document.getElementById("categorySelect").value;
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const ul = document.getElementById("taskList");
    const li = document.createElement("li");
    li.setAttribute("data-category", category); // Store category for search

    // Task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Category Tag
    const tag = document.createElement("span");
    tag.className = "category-tag";
    tag.textContent = category;

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.className = "delete-btn";
    delBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(taskSpan);
    li.appendChild(tag);
    li.appendChild(delBtn);

    ul.appendChild(li);

    input.value = "";
}

// SEARCH FUNCTION
function searchTask() {
    const searchValue = document.getElementById("searchBar").value.toLowerCase();
    const tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(task => {
        const text = task.textContent.toLowerCase();
        if (text.includes(searchValue)) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }
    });
}
