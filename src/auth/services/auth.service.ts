import { ConflictException, Injectable, NotFoundException, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredintialsDto } from '../dtos/auth-crendintials.dto';
import { User } from '../user.entity';
import typeOrmConfig from 'ormconfig';
import { QueryFailedError } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserCredintialsDto } from '../dtos/user-credintials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../interfaces/jwt.interface';

@Injectable()
export class AuthService {

  constructor(
    private jwtService: JwtService
  ){}

  private userRepository = typeOrmConfig.getRepository(User);
  private readonly logger = new Logger(AuthService.name);

  async signUp(userCrendentialsDto: UserCredintialsDto): Promise<User> {
    const { username, phone_number, slug, email, password } = userCrendentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password,salt);
    try {
      const user = this.userRepository.create({ username, phone_number, password: hashedPassword, slug, email });
      await this.userRepository.save(user);
      return user;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        this.logger.error(`Error during signUp: ${error.message}`, error.stack);
        throw new ConflictException('User with this username or phonenumber already exists.');
      } else {
        throw error;
      }
    }
  }

  async signIn(authCrendentialsDto: AuthCredintialsDto): Promise<{accessToken: String}>{
   const {username, password}  = authCrendentialsDto;
    const user = await this.userRepository.findOne({where: {username}});

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = {username};
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    }else{
      throw new UnauthorizedException('Please Check Your Login Crendentials');
    }
  }

  async userDetails(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async usersList(): Promise<User[]>{

    const users = await this.userRepository.find();
    if(!users){
      throw new NotFoundException();
    }

    return users;

  }
}
