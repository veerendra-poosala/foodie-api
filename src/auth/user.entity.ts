import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  username: string;

  @Column({
    unique: true,
    nullable: true,
  })
  slug: string;

  @Column({
    unique: true,
    length: 20,
  })
  phone_number: string;

  @Column({ nullable: true, length: 255 })
  email: string;

  @Column()
  password: string;
}
