// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { FoodItem } from '../food_item.entity';

// @Injectable()
// export class FoodItemRepository {
//   constructor(
//     @InjectRepository(FoodItem)
//     private readonly foodItemRepository: Repository<FoodItem>,
//   ) {}

//   async getById(food_item_id: number): Promise<FoodItem> {
//     const itemInfo = await this.foodItemRepository.findOne({
//       where: { food_item_id },
//     });
//     if (!itemInfo) {
//       throw new NotFoundException();
//     }
//     return itemInfo;
//   }
// }
