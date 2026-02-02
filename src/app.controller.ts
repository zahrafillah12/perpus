import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/welcome')
    getwelcome(): string{
      return this.appService.getwelcome();
    }
  @Get('/tambah')
    tambah(): number{
      return this.appService.tambah(10,5);

    }
}
