import { MigrationInterface, QueryRunner } from "typeorm";

export class Pizza1752736325390 implements MigrationInterface {
    name = 'Pizza1752736325390'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test" ("id" int NOT NULL IDENTITY(1,1), "Name" nvarchar(255) NOT NULL, CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Pizza" ("Id" nvarchar(255) NOT NULL, "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_436e6d77a937fa4ccf47e640aeb" PRIMARY KEY ("Id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Pizza"`);
        await queryRunner.query(`DROP TABLE "test"`);
    }

}
