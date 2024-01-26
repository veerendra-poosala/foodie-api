import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { FoodItem } from '../food_item.entity';


@Injectable()
export class FoodItemRepository extends Repository<FoodItem> {
    constructor(private dataSource: DataSource) {
        super(FoodItem, dataSource.createEntityManager());
      }

  async getById(food_item_id: number): Promise<FoodItem> {
    const itemInfo = await this.findOne({
      where: { food_item_id },
    });
    if (!itemInfo) {
      throw new NotFoundException();
    }
    return itemInfo;
  }
}
