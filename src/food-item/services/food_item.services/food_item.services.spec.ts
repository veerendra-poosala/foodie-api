import { Test, TestingModule } from '@nestjs/testing';
import { FoodItemServices } from './food_item.services';

describe('FoodItemServices', () => {
  let provider: FoodItemServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodItemServices],
    }).compile();

    provider = module.get<FoodItemServices>(FoodItemServices);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
