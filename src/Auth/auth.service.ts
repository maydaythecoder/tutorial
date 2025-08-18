import { Injectable } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup(dto: SignUpDto) {
    return `Signing up user with email: ${dto.email}`;
  }
  signin(dto: SignInDto) {
    return `Signing in user with email: ${dto.email}`;
  }
}
