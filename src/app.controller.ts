import { Body, Controller, Get, Post, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './create-user.dto';

@Controller()
export class AppController {
  @Get()
  @Render('form')
  formView(@Req() req: Request) {
    return {
      old: req.flash('old') ?? {},
      errors: req.flash('errors') ?? {},
    };
  }

  @Post()
  confirmView(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return;
  }
}
