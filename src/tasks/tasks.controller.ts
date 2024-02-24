import { Body, Controller,Delete,Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {CreateTaksDto, UpdateTaksDto} from './dto/task.dto'

@Controller('tasks') //guia para mis rutas
export class TasksController {

    //inyeccion de dependencia 
    constructor(private tasksServices:TasksService) {}

    //operaciones para obtener datos.
    @Get()
    getlAllTasks(){
        return this.tasksServices.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask:CreateTaksDto){
        return this.tasksServices.createTasks(newTask.title,newTask.description)
    }

    @Delete(':id')//ruta/id 
    deleteTaks(@Param('id') id:string){
        this.tasksServices.deleteTasks(id)
    }

    @Patch(':id')//actualizar dependiendo el id
    updateTask(@Param('id') id:string, @Body() updatefields:UpdateTaksDto){
    return this.tasksServices.updateTasks(id,updatefields);

    }




}
