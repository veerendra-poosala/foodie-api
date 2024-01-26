import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFoodItemDto } from 'src/food-item/dtos/foodItemDto';
import { FoodItem } from 'src/food-item/food_item.entity';
import typeOrmConfig from 'ormconfig';
import { FoodItemRepository } from 'src/food-item/repositories/food_item.repository';

@Injectable()
export class FoodItemService {
  constructor(
    private foodItemRepo: FoodItemRepository
    ) {}

  async createFoodItem(createFoodItemDto: CreateFoodItemDto): Promise<FoodItem> {
    const { name, price, availability } = createFoodItemDto;
    const foodItem = await this.foodItemRepo.create({
      name,
      price,
      availability,
    });

    if (!foodItem) {
      throw new NotFoundException();
    }

    await this.foodItemRepo.save(foodItem);
    return foodItem;
  }

  async getAllFoodItems(): Promise<FoodItem[]> {
    return this.foodItemRepo.find();
  }

  async getFoodItmeByID(food_item_id: number): Promise<FoodItem> {
    const itemInfo = await this.foodItemRepo.getById(food_item_id);
    if (!itemInfo) {
      throw new NotFoundException();
    }
    return itemInfo;
  }
}
