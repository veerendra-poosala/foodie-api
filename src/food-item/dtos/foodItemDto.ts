import { IsBoolean, IsNumber, IsOptional, IsString} from "class-validator";


export class CreateFoodItemDto{

    @IsString()
    name: string;

    @IsNumber()
    price: number;

    @IsBoolean()
    availability: boolean;
}

export class FoodItemGetDto {

    @IsNumber()
    food_item_id: number;

    @IsOptional()
    @IsString()
    name?: string;

  }
  

export class FoodItemUpdateDto {

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsOptional()
    @IsBoolean()
    availability?: boolean;
  }
  