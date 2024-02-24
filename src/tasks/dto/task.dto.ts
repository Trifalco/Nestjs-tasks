import { TaskStatus } from "../task.entity"
import {IsString, IsNotEmpty, MinLength,IsOptional,IsIn} from 'class-validator'
 
export class CreateTaksDto{
    @IsString()//validador para que los valores que me mande el cliente son los que yo deseo
    @IsNotEmpty()//validador que no venga vacio , consultar en la documentacion 
    @MinLength(2)//validador de que el minimo de letras es de 2
    title:string 
 
    @IsString()
    description:string
}

export class UpdateTaksDto{
    @IsString()//validador para que los valores que me mande el cliente son los que yo deseo
    @IsOptional()//validador de que el titulo no es opcional al actualizar.
    title?:string 

    @IsString()
    @IsOptional()
    description?:string

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.DONE,TaskStatus.IN_PROGRESS,TaskStatus.PENDING])//VALIDADOR PARA especificar cuales son los unicos valores que se adminten
    status?:TaskStatus
}