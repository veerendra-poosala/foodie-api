import { TypeOptions } from 'class-transformer';
import * as dotenv from 'dotenv';
import "reflect-metadata"
import { User } from 'src/auth/user.entity';
import { FoodItem } from 'src/food-item/food_item.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();
export const ormCredintials: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : null,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  entities:  [__dirname + '/src/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  migrationsRun: false,
  synchronize: false,
}
const typeOrmConfig = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : null,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  entities:  [__dirname + '/src/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  migrationsRun: false,
  synchronize: false,
});

typeOrmConfig.initialize()
.then(() => {
  console.log("initialized data source");
})
.catch((error) => console.log(error))

export default typeOrmConfig;
