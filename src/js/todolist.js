function showTodoList() {
    const section = document.querySelector('section');
    const clock = document.querySelector('.entire_clock');
    const quote_task = document.querySelector('.quote_toDoList');
    section.classList.add('checkTasks');
    clock.classList.add('hidden');
    quote_task.classList.remove('hidden');
    quote_task.classList.add('checkTasks');
}
function closeTodo() {
    const section = document.querySelector('section');
    const quote_task = document.querySelector('.quote_toDoList');
    section.classList.remove('checkTasks');
    quote_task.classList.add('hidden');
    quote_task.classList.remove('checkTasks');
}

// show the owner of the list
const whoseList = document.querySelector("#whoseList");
const owner = localStorage.getItem('username');

window.onload = function() {
    whoseList.innerText = owner + '\'s todo list';
}

const TODOS_KEY = "New Todo";
// getting all required elements
const toDoForm = document.getElementById("todo_form")
const inputBox = document.querySelector(".toDo_input input");
const addToDo = document.querySelector(".toDo_input .plus");
const theList = document.querySelector('.theList');
const deleteAllTasks = document.querySelector('.totalList .clear');

inputBox.onkeyup = () => {
    let userData = inputBox.value; // getting user entered value
    if (userData.trim() != 0) { // if user values aren't only spaces
        addToDo.classList.add("active"); // active the add button
    } else {
        addToDo.classList.remove("active"); // remove the active class
    }
}

toDoForm.addEventListener("submit", handleToDoSubmit);
showTasks();

// if user click on the add button
addToDo.onclick = () => {
    let userData = inputBox.value; // getting user entered value
    let getLocalStorage = localStorage.getItem(TODOS_KEY); // getting localstorage
    if (getLocalStorage == null) {
        todoList = []; // create blank array
    } else {
        todoList = JSON.parse(getLocalStorage); // transforming json string into a js object
    }
    todoList.push(userData); // pushing or adding user data
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoList)); // transforming js object into a json string
    showTasks(); // calling showTasks function
}

// if user press enter after writing the task in the input
function handleToDoSubmit(event) {
    event.preventDefault();
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem(TODOS_KEY);
    if (getLocalStorage == null) {
        todoList = [];
    } else {
        todoList = JSON.parse(getLocalStorage);
    }
    todoList.push(userData);
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoList));
    showTasks();
}

// function to add task list inside ul
function showTasks() {
    let getLocalStorage = localStorage.getItem(TODOS_KEY);
    if (getLocalStorage == null) {
        todoList = []; // create blank array
    } else {
        todoList = JSON.parse(getLocalStorage); // transforming json string into a js object
    }

    const countingTasks = document.querySelector(".countingTasks");
    countingTasks.textContent = todoList.length; // passing the length value in countingTasks
    if (todoList.length > 0) {
        deleteAllTasks.classList.add("active"); // active the clearall button
    } else {
        deleteAllTasks.classList.remove("active"); // unactive the clearall button
    }

    let newli = '';
    todoList.forEach((element, index) => {
        newli += 
            `<li> ${element}
                <span class="check" onclick = "checkTask()"><i class="fa fa-check"></i></span>
                <span class="trash" onclick = "deleteTask(${index})";><i class="fas fa-trash"></i></span>
            </li>`
    });
    theList.innerHTML = newli; // adding new li tag inside ul tag
    inputBox.value = ""; // once task added make the input field blank
    addToDo.classList.remove("active");
}

// delete task function
function deleteTask(index) {
    let getLocalStorage = localStorage.getItem(TODOS_KEY);
    todoList = JSON.parse(getLocalStorage);
    todoList.splice(index, 1); // delete or remove the particular indexed li
    
    // after remove the li, update again to the local storage
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoList));
    showTasks();
}
// check task function
function checkTask() {
    let currentTasks = document.querySelectorAll('.check');
    for (let cnt = 0; cnt < currentTasks.length; cnt++) {
        currentTasks[cnt].onclick = function () {
            this.parentElement.classList.toggle("completed");
        }
    }
}

// delete all tasks function
deleteAllTasks.onclick = () => {
    todoList = []; // make an array empty
    // after delete all tasks, update again to the local storage
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoList));
    showTasks();
}