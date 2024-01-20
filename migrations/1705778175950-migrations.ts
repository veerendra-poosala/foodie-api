import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1705778175950 implements MigrationInterface {
    name = 'Migrations1705778175950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying(100) NOT NULL, "slug" character varying, "phone_number" character varying(20) NOT NULL, "email" character varying(255), "password" character varying NOT NULL, CONSTRAINT "UQ_ac08b39ccb744ea6682c0db1c2d" UNIQUE ("slug"), CONSTRAINT "UQ_01eea41349b6c9275aec646eee0" UNIQUE ("phone_number"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
