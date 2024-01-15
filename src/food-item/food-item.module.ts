import { Module } from '@nestjs/common';
import { FoodItemController } from './food-item.controller';
import { FoodItemService } from './services/food_item.services/food_item.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodItem } from './food_item.entity';
// import { FoodItemRepository } from './repositories/food_item.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
    // imports: [TypeOrmModule.forFeature([FoodItem,FoodItemRepository]),HttpModule],
    controllers: [FoodItemController],
    providers: [
        FoodItemService,
        // FoodItemRepository,
    ],
    exports: [FoodItemService],
})
export class FoodItemModule {}
