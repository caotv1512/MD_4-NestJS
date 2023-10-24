import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user/:id')
  getHello(@Param() param  , @Query() query): string {
    console.log(param, 'param');
    console.log(query, 'query');
    
    return this.appService.getHello();
  }

  @Get('/user')
  getUser(): string {
    return this.appService.getUser();
  }
}
