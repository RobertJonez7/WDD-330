import { ContentArray } from './ContentArray.js';
import { CompletedArray } from './CompletedArray.js';
import Task from './task.js'

window.onload = () => {
    document.querySelector('#addButton').addEventListener('click', addTaskToArray);
    document.querySelector('.progress-column').addEventListener('click', handleToDoEvent);
    document.querySelector('.completed-column').addEventListener('click', handleToDoEvent);
}

const myTask = new Task();

const mapArray = () => {
    document.querySelector('.progress-column').innerHTML = ContentArray.map(val => 
        `<div class="box" data-id=${val.title}>${val.title}
         <input class="box-check" type="checkbox"><button class="deleteTask">X</button></div>`
    ).join('');

    document.querySelector('.completed-column').innerHTML = CompletedArray.map(val => 
        `<div class="box" data-id=${val.title}>${val.title}
        <button class="deleteCompletedTask">X</button></div>`
    ).join('');
}

const handleToDoEvent = e => {
    if(e.target.className == 'deleteTask') {
        deleteTaskFromArray(e, ContentArray);
    }
    else if(e.target.className == 'deleteCompletedTask') {
        deleteTaskFromArray(e, CompletedArray);
    }
    else {
        completeTaskFromArray(e);
    }
}


const addTaskToArray = () => {
    const input = document.querySelector('#input-todo').value;
    if(input == '') {
        alert("Cannot be empty");
        return;
    }
    myTask.addNewToDo(input);
    mapArray();
}

const completeTaskFromArray = e => {
    let target = e.target.parentNode.getAttribute('data-id');
    myTask.updateStatus(target);
    mapArray();
}

const deleteTaskFromArray = (e, array) => {
    console.log("yo ", array);
    let target = e.target.parentNode.getAttribute('data-id');
    myTask.deleteToDo(target, array);
    mapArray();
}
