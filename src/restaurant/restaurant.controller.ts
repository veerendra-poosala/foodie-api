import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { RestaurantService } from './services/restaurant.service';
import { CreateRestaurantDto } from './dtos/restaurant.dto';

@Controller('restaurant')
export class RestaurantController {
    constructor(private restaurantService: RestaurantService){}

    @Post()
    async createRestaurant(@Body() restaurantDetailsDto: CreateRestaurantDto){
        const restaurant = this.restaurantService.createRestaurant(restaurantDetailsDto);
        return {
            statusCode : HttpStatus.CREATED,
            status: 'User created successfully',
            data : [
              restaurant
            ]
          }
    }

    @Get()
    async listRestaurants() {
        const restaurants = await this.restaurantService.listRestaurants();
        return {
            statusCode: HttpStatus.OK,
            status: 'List of restaurants',
            data: restaurants,
        };
    }
}
