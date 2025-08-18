import { Injectable } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup(req: Request, dto: SignUpDto) {
    console.log(req);
    return `Signing up user with email: ${dto.email}`;
  }
  signin(dto: SignInDto) {
    return `Signing in user with email: ${dto.email}`;
  }
}
