import { ContentArray } from './ContentArray.js';
import { CompletedArray } from './CompletedArray.js'

class Task {
    addNewToDo(text) {
        const newTask = {
            id: new Date(),
            title: text,
            status: "Active",
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
        for (var i = 0; i < ContentArray.length; i++)
        {
            if(ContentArray[i].title === title) {
                ContentArray[i].status = "Completed";
                CompletedArray.push(ContentArray[i]);
                this.deleteToDo(ContentArray[i].title, ContentArray);
                break;
            }
        }
    }
}

export default Task;