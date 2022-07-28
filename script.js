const form = document.querySelector('#new-task-form');
const newTaskInput = document.querySelector('#new-task-input');
const newTaskSubmit = document.querySelector('#new-task-submit');
const listOfAllElements = document.getElementById('todoList');

displayTasks();

form.addEventListener('submit', function(){
    let userData = newTaskInput.value;

    if(!userData){
        alert('Please add a task');
        return;
    }

    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        taskArr = [];
    } else {
        taskArr = JSON.parse(getLocalStorage);
    }

    taskArr.push(userData);
    localStorage.setItem("New todo", JSON.stringify(taskArr));
});


function displayTasks(){
    let getLocalStorage = localStorage.getItem("New todo");
    if (getLocalStorage == null) {
        taskArr = [];
    } else {
        taskArr = JSON.parse(getLocalStorage);
    }

    let newLiTag = '';
    taskArr.forEach((element, index) => {
        newLiTag += `<li>${element} <button>Edit</button> <button>Delete</button> </li>`;
    });

    listOfAllElements.innerHTML = newLiTag;
}