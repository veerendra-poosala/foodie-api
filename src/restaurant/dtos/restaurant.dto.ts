import { IsEmail, IsNumber, IsOptional, IsString, MaxLength, MinLength, isNumber } from "class-validator";



export class CreateRestaurantDto{  
    //id : number;

    @IsString()
    name : string;

    @IsString()
    slug : string;

    @IsString()
    @MinLength(10)
    @MaxLength(20)
    contact_number: string;

    @IsOptional()
    @IsEmail()
    email : string;

    @IsOptional()
    @IsString()
    logo: string;

    @IsOptional()
    @IsString()
    description: string;
}

export class UpdateRestaurantDto{

    @IsNumber()
    id : number;

    @IsOptional()
    @IsString()
    name : string;

    @IsOptional()
    @IsString()
    slug : string;

    @IsOptional()
    @IsString()
    @MinLength(10)
    @MaxLength(20)
    contact_number: string;

    @IsOptional()
    @IsEmail()
    email : string;

    @IsOptional()
    @IsString()
    logo: string;

    @IsOptional()
    @IsString()
    description: string;


}

