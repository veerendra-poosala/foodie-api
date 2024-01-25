import { ConflictException, Injectable } from '@nestjs/common';
import { RestaurantRepository } from '../repositories/restaurant.repository';
import { CreateRestaurantDto } from '../dtos/restaurant.dto';
import { Restaurant } from '../restaurant.entity';
import { QueryFailedError } from 'typeorm';

@Injectable()
export class RestaurantService {
    constructor(
        private restaurantRepo: RestaurantRepository
    ){}

    async createRestaurant(restaurantDetailsDto: CreateRestaurantDto): Promise<Restaurant> {
        const {
            name, slug, contact_number, email, logo, description
        } = restaurantDetailsDto;

        try {
            const restaurant = this.restaurantRepo.create({name, slug, contact_number, email, logo, description});
            await this.restaurantRepo.save(restaurant);
            return restaurant;
          } catch (error) {
            if (error instanceof QueryFailedError) {
              throw new ConflictException('Restaurant with this slug already exists.');
            } else {
              throw error;
            }
          }
    }

    async listRestaurants(): Promise<Restaurant[]> {
        return this.restaurantRepo.find();
    }
}
