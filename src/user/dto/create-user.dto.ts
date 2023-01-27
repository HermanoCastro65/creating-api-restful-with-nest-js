import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string

  @IsEmail(null, { message: 'The email entered is invalid' })
  email: string

  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string
}
