import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthCredintialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(6)
  @MaxLength(32)
  // @Matches()
  password: string;
}
