import { Body, Controller, Post } from '@nestjs/common';

@Controller('create-cat')
export class CreateCatController {
    @Post()
    create(@Body() cateData :{Name:string;age:number;breed:string}){
        return{
            message:"cated",
            data: cateData
        }
    }
}
