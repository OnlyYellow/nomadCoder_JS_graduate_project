const whoseList = document.querySelector("#whoseList");
const owner = localStorage.getItem('username');

const addToDo = document.querySelector(".plus");

window.onload = function() {
    whoseList.innerText = owner + '\'s todo list';
}

addToDo.addEventListener('click', function(e) {

})