import { Injectable } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  signup(dto: SignUpDto) {
    return `Signing up user with email: ${dto.email}`;
  }
  signin(dto: SignInDto) {
    return `Signing in user with email: ${dto.email}`;
  }
}
