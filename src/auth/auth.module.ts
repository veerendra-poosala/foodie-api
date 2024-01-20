import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
// import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}) ,
    JwtModule.register({
      secret : 'secret',
      signOptions: {
        expiresIn: 3600, 
      }
    }),],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
