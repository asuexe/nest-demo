import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { get } from 'http';

@Controller('cats')
export class catsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.meow_meow();
  }
}
  