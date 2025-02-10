import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';



@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}