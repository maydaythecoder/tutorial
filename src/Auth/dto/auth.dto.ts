import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  Matches,
  IsOptional,
} from 'class-validator';

export class SignUpDto {
  // SECURITY: Email validation prevents injection via malformed addresses
  @IsEmail({}, { message: 'Invalid email format' })
  @MaxLength(254) // RFC 5321 compliant max length
  email: string;

  // SECURITY: Strong password policy prevents credential stuffing attacks
  @IsString()
  @MinLength(12, { message: 'Password must be at least 12 characters' })
  @MaxLength(128) // Prevent DoS via extremely long passwords
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
    message:
      'Password must contain uppercase, lowercase, number, and special character',
  })
  password: string;

  // SAFETY: Optional field with length bounds to prevent buffer overflow
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(50) // Reasonable name length limit
  @Matches(/^[a-zA-Z\s'-]+$/, {
    message: 'First name contains invalid characters',
  })
  firstName?: string;
}

export class SignInDto {
  // SECURITY: Email validation prevents injection via malformed addresses
  @IsEmail({}, { message: 'Invalid email format' })
  @MaxLength(254) // RFC 5321 compliant max length
  email: string;

  // SAFETY: Input bounds validation prevents DoS attacks
  @IsString()
  @MinLength(1)
  @MaxLength(128) // Match signup max length
  password: string;
}
