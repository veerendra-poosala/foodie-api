import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from '@nestjs/common';
import { AuthCredintialsDto } from './dtos/auth-crendintials.dto';
import { AuthService } from './services/auth.service';
import { UserCredintialsDto } from './dtos/user-credintials.dto';

@Controller('user')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async signUp(@Body() userCredintialsDto: UserCredintialsDto){
    const user = await this.authService.signUp(userCredintialsDto);
    
    return {
      statusCode : HttpStatus.CREATED,
      status: 'User created successfully',
      data : [
        {id : user?.id}
      ]
    }
  }

  @Post('/signin')
  signIn(@Body() authCredintialsDto: AuthCredintialsDto): Promise<{accessToken: String}>{
    const result = this.authService.signIn(authCredintialsDto);
    return result;
  }

  @Get()
  async getUsersList(){
    const data = await this.authService.usersList();
    return {
      statusCode : HttpStatus.OK,
      status : 'Users data retrieved successfully',
      data : data
    }
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) {
    try {
      const data = await this.authService.userDetails(id);
      return {
        statusCode: HttpStatus.OK,
        status : 'User data retrieved successfully',
        data,
      };
    } catch (error) {
      throw new NotFoundException(`User Details with ID ${id} not found`);
    }
  }
}
