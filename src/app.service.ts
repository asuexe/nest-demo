import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  meow_meow(): string {
    return 'Meowwwwwwwwwwwww';
  }
}

