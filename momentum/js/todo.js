const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(newTodo){
  const todoList_element = document.createElement("li");
  const todoList_span = document.createElement("span");
  todoList_element.appendChild(todoList_span);  
  todoList_span.innerText = newTodo;
  toDoList.appendChild(todoList_element);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);