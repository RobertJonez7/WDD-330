import { ContentArray } from './ContentArray.js';

class Task {
    addNewToDo(text) {
        const newTask = {
            id: new Date(),
            title: text,
            completed: false,
        }

        ContentArray.push(newTask);
    }

    deleteToDo(title, array) {
        for (var i = 0; i < array.length; i++)
        {
            if(array[i].title === title) {
                array.splice(i, 1);
                break;
            }
        }
    }

    updateStatus(title) {
       
    }

    getArrayLength() {
        return ContentArray.length;
    }
}

export default Task;