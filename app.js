const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    addItems()
})

function addItems() {

    const todoText = input.value;
    if (todoText) {
        const todoEl = document.createElement("li")
        todoEl.innerText = todoText;

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");

            updateLs();
        })

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove();

            updateLs();
        })

        todosUL.appendChild(todoEl);
        input.value = ""

        updateLs();
    }
}

function updateLs() {
    const todoEl = document.querySelectorAll("li");

    const todosUL = []

    todoEl.forEach((todoEl) => {
        todosUL.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed")
        })
    })
    localStorage.setItem("todosUL", JSON.stringify(todosUL))
}


