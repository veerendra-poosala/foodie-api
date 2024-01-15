import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateFoodItemDto } from './dtos/foodItemDto';
import { FoodItem } from './food_item.entity';
import { FoodItemService } from './services/food_item.services/food_item.services';

@Controller('food-item')
export class FoodItemController {
  constructor(private readonly foodItemService: FoodItemService) {}

  @Post()
  async createFoodItem(@Body() createFoodItemDto: CreateFoodItemDto): Promise<FoodItem> {
    return this.foodItemService.createFoodItem(createFoodItemDto);
  }

  @Get()
  async getAllFoodItems(): Promise<FoodItem[]> {
    return this.foodItemService.getAllFoodItems();
  }

  @Get(':id')
  async getFoodItemById(@Param('id') id: number): Promise<FoodItem> {
    try {
      return this.foodItemService.getFoodItmeByID(id);
    } catch (error) {
      throw new NotFoundException(`Food item with ID ${id} not found`);
    }
  }
}
