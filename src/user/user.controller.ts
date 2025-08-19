import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/Auth/gaurd';
import { GetUser } from 'src/Auth/decorators';
import type { User } from 'generated/prisma';

@Controller('users')
export class UserController {
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
