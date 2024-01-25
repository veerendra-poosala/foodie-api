import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1706209270036 implements MigrationInterface {
    name = 'Migrations1706209270036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" RENAME COLUMN "contact_number" TO "phone_number"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" RENAME COLUMN "phone_number" TO "contact_number"`);
    }

}
