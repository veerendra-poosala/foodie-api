import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1705216770975 implements MigrationInterface {
    name = 'Migrations1705216770975'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "food_item" ("food_item_id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "availability" boolean NOT NULL, CONSTRAINT "PK_e13cebf0d39aa3872351ddd87bb" PRIMARY KEY ("food_item_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "food_item"`);
    }

}
