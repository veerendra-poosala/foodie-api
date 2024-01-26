import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('restaurant')
export class Restaurant{
    @PrimaryGeneratedColumn()
    id : number;

    @Column({ length: 100 })
    name : string;

    @Column({unique: true})
    slug : string;

    @Column({length: 20})
    contact_number: string;

    @Column({ nullable: true, length: 255 })
    email : string;

    @Column({nullable: true})
    logo: string;

    @Column({nullable: true})
    description: string;
}