import { Module } from '@nestjs/common';
import { catsController } from './app.controller';
import { AppService } from './app.service';
import { CreateCatController } from './create-cat/create-cat.controller';

@Module({
  imports: [],
  controllers: [catsController, CreateCatController],
  providers: [AppService],
})
export class AppModule {}

