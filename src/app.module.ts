import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodItemModule } from './food-item/food-item.module';

@Module({
  imports: [ FoodItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
