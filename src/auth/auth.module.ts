import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UserRepository } from './repositories/user.repository';
import { ormCredintials } from 'ormconfig';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}) ,
    JwtModule.register({
      secret : 'secret',
      signOptions: {
        expiresIn: 3600, 
      }
    }),
    TypeOrmModule.forRoot({
      ...ormCredintials,
      autoLoadEntities: true, 
      synchronize: false,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy,UserRepository],
  exports: [AuthService, JwtStrategy, PassportModule],
})
export class AuthModule {}
