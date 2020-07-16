var todoInput = document.getElementById("todoInput");
var btnAdd = document.getElementById("btnAdd");
var todoList = document.getElementById("todoList");

// loading todo items from JS using DOM
const arr = [
    { task: "Milk", isCompleted: true },
    { task: "Eggs", isCompleted: true },
    { task: "Bread", isCompleted: false }
];


// a function that rerenders the todo list
function renderList() {
    //use a for loop to render the list items
    var html = ""
    for (let i = 0; i < arr.length; i++) {

        if (arr[i].isCompleted) {
            html += `<li class="todo-list-item completed" id=${i}>${arr[i].task}</li>`
        } else {
            html += `<li class="todo-list-item" id=${i}>${arr[i].task}</li>`
        }
    }
    todoList.innerHTML = html
}

function strikeOff() {
    var listItems = document.getElementsByClassName("todo-list-item")

    for (let j = 0; j < listItems.length; j++) {
        const item = listItems[j];

        item.onclick = function () {
            item.className = "todo-list-item completed";
            arr[item.id].isCompleted = true;
        }
    }
}


btnAdd.onclick = function () {
    arr.push({ task: todoInput.value, isCompleted: false });
    renderList();
    strikeOff();
}

renderList();
strikeOff();
