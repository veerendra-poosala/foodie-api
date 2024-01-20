import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodItemModule } from './food-item/food-item.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
            PassportModule.register({defaultStrategy: 'jwt'}) ,
            JwtModule.register({
              secret : 'secret',
              signOptions: {
                expiresIn: 3600, //time to expire
              }
            }),
            FoodItemModule, 
            AuthModule,

          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
