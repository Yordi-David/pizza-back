import { MigrationInterface, QueryRunner } from "typeorm";

export class PizzaStart11756367817542 implements MigrationInterface {
    name = 'PizzaStart11756367817542'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "toppings" ("toppingId" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_89760e97173ff785d451a545a7a" PRIMARY KEY ("toppingId"))`);
        await queryRunner.query(`CREATE TABLE "Pizza" ("pizzaId" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_8bd464fe9b9f534815c6e3e6165" PRIMARY KEY ("pizzaId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Pizza"`);
        await queryRunner.query(`DROP TABLE "toppings"`);
    }

}
