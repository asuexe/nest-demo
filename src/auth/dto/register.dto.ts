import { IsEmail, IsNotEmpty, IsString, IsEnum, IsPhoneNumber } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsEnum(['Super User', 'Editor', 'Viewer'])
  role: string;

  @IsPhoneNumber()
  phoneNo: string;
}
