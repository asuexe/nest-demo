import { Module } from '@nestjs/common';
import { catsController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [catsController],
  providers: [AppService],
})
export class AppModule {}

