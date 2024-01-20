import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class UserCredintialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(10)
  @MaxLength(20)
  phone_number: string;

  @IsString()
  slug: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(32)
  // @Matches()
  password: string;
}
