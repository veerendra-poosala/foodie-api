import { Module } from '@nestjs/common';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './services/restaurant.service';
import { RestaurantRepository } from './repositories/restaurant.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormCredintials } from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormCredintials,
      autoLoadEntities: true, 
      synchronize: false,
    }),

  ],
  controllers: [RestaurantController],
  providers: [RestaurantService, RestaurantRepository],
  exports: [RestaurantService]
})
export class RestaurantModule {}
