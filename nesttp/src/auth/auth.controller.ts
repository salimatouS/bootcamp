import { Controller, Get, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }

  @Post()
  posHello() {
    return this.authService.putHello();
  }

  @Put()
  putHello() {
    return this.authService.putHello();
  }

}
