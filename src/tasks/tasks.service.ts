import { Injectable  } from '@nestjs/common';
import { Task,TaskStatus } from './task.entity';
import {v4} from 'uuid'//generador de ids 
import { UpdateTaksDto } from './dto/task.dto';
@Injectable()
export class TasksService {

    //array de ejemplo donde se guardaran las tareas
    private tasks:Task[]=[{
        id:'1',
        title:'fist taks',
        description:'some task',
        status:TaskStatus.PENDING,
    },
]


    getAllTasks(){
        return this.tasks;
    }
    createTasks(title:string,description:string){
        const task={
            id:v4(),/*new Date().toISOString(),*///este podria ser un tipo de id , por fecha, pero podemos agregar otro tipo de id de uuid
            title,
            description,
            status:TaskStatus.PENDING
        }
        this.tasks.push(task)//lo agrega al array que habia creado con una tarea

    }

    deleteTasks(id:string){
     this.tasks=this.tasks.filter(task=>task.id !== id)
    }

    getTaskById(id:string):Task{
        return this.tasks.find(tasks=> tasks.id===id)
    }

    updateTasks(id:string, updateFields:UpdateTaksDto):Task{
        const task=this.getTaskById(id)
        const newtask=Object.assign(task,updateFields)//el metodo assign me une 2 arrays y si hay 2 propiedades iguales se le asignara el nuevo valor en este caso el ultimo.
        this.tasks.map((task)=>(task.id===id?newtask:task));
        return newtask
    }





}
