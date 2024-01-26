import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodItemModule } from './food-item/food-item.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RestaurantModule } from './restaurant/restaurant.module';
import typeOrmConfig, { ormCredintials } from 'ormconfig';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
            PassportModule.register({defaultStrategy: 'jwt'}) ,
            JwtModule.register({
              secret : 'secret',
              signOptions: {
                expiresIn: 86400, //time to expire
              }
            }),
            TypeOrmModule.forRoot({
              ...ormCredintials,
              autoLoadEntities: true, 
              synchronize: true,
            }),
            FoodItemModule, 
            AuthModule, RestaurantModule,

          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
