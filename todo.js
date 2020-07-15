var todoInput = document.getElementById("todoInput");
var btnAdd = document.getElementById("btnAdd");
var todoList = document.getElementById("todoList");

btnAdd.onclick = function () {
    // debugger
    todoList.innerHTML = todoList.innerHTML + `<li  class="todo-list-item">${todoInput.value}</li>`
}