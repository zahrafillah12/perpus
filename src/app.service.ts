import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'aku lah zahra!';
  }

  getwelcome(): string {
    return 'akulahh';
  }
  tambah(a: number, b: number): number {
    return a * b;
  }
}