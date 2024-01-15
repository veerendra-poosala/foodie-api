import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('food_item')
export class FoodItem{
    @PrimaryGeneratedColumn()
    food_item_id : number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    availability: boolean

}