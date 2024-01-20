import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { CreateFoodItemDto } from './dtos/foodItemDto';
import { FoodItem } from './food_item.entity';
import { FoodItemService } from './services/food_item.services/food_item.services';

@Controller('food-item')
export class FoodItemController {
  constructor(private readonly foodItemService: FoodItemService) {}

  @Post()
  async createFoodItem(@Body() createFoodItemDto: CreateFoodItemDto) {
    await this.foodItemService.createFoodItem(createFoodItemDto);
    return {
      statusCode: HttpStatus.CREATED,
      status: 'Food Item created successfully',
    };
  }

  @Get()
  async getAllFoodItems() {
    const data:FoodItem[] = await this.foodItemService.getAllFoodItems();
    return {
            statusCode: HttpStatus.OK,
            data
            }
  }

  @Get(':id')
  async getFoodItemById(@Param('id') id: number) {
    try {
      const data = await this.foodItemService.getFoodItmeByID(id);
      return  {
        statusCode: HttpStatus.OK,
        data
        }
    } catch (error) {
      throw new NotFoundException(`Food item with ID ${id} not found`);
    }
  }
}
