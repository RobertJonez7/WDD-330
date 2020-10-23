import { ContentArray } from './ContentArray.js';
import Task from './task.js'

window.onload = () => {
    const date = new Date();
    document.querySelector('#addButton').addEventListener('click', addTaskToArray);
    document.querySelector('.task-list').addEventListener('click', handleToDoEvent);
    document.querySelector('#date').innerHTML = date.toLocaleDateString("en-US");
}

const myTask = new Task();

const mapArray = () => {
    document.querySelector('.task-list').innerHTML = ContentArray.map(val => 
        `<div class="box" data-id=${val.title}>${val.title}
         <input class="box-check" type="checkbox"><button class="deleteTask">X</button></div><hr>`
    ).join('');

    document.querySelector('#counter').innerHTML = myTask.getArrayLength() + ' Tasks left';
}

const handleToDoEvent = e => {
    if (e.target.className == 'deleteTask') {
        deleteTaskFromArray(e, ContentArray);
    }
    if (e.target.className == 'box-check') {
        //completeTaskFromArray(e);
    }
}

const addTaskToArray = () => {
    const input = document.querySelector('#input-todo');
    if(input.value == '') {
        alert("Input cannot be empty");
        return;
    }
    myTask.addNewToDo(input.value);
    input.value = '';
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
