import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Mother Fuckers!';
  }

  getAnotherHello(): string {
    return "Hello Other Nigga";
  }
}
