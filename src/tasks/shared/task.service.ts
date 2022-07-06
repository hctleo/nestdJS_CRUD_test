import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {

    tasks: Task[] = [

        {id: 1, description: 'Tarefa 1', completed: false},
        {id: 2, description: 'Tarefa 2', completed: false},
        {id: 3, description: 'Tarefa 3', completed: false},
        {id: 4, description: 'Tarefa 4', completed: true},
        {id: 5, description: 'Tarefa 5', completed: false},
        {id: 6, description: 'Tarefa 6', completed: true},
        {id: 7, description: 'Tarefa 7', completed: false},
        {id: 8, description: 'Tarefa 8', completed: true},
        {id: 9, description: 'Tarefa 9', completed: false},
        {id: 10, description: 'Tarefa 10', completed: true},
     ];


     getAll() {

        return this.tasks;


     }

     getById(id: number) {

        const task = this.tasks.find((value) => value.id == id);
        return task;
   
     }

     create(task: Task) {

        let last_id = 0;
        if (this.tasks.length > 0) {

            last_id = this.tasks[this.tasks.length - 1].id;

        }

        task.id = last_id + 1;
        this.tasks.push(task);

        return task;


     }

     update(task: Task) {

        const task_array = this.getById(task.id);

        if (task_array) {

            task_array.description = task.description;
            task_array.completed = task.completed; 
        }

        return task_array;


     }

     delete(id: number) {

        const index = this.tasks.findIndex((value) => value.id == id);
        this.tasks.splice(index, 1);

        return 'deleted';


     }

}
