export class SignUpDto {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export class SignInDto {
  email: string;
  password: string;
}
