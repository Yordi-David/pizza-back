import { MigrationInterface, QueryRunner } from "typeorm";

export class PizzaIdNumber1753783057650 implements MigrationInterface {
    name = 'PizzaIdNumber1753783057650'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Pizza" DROP CONSTRAINT "PK_b85b8b8abbb1a048d216b42918c"`);
        await queryRunner.query(`ALTER TABLE "Pizza" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Pizza" ADD "id" int NOT NULL IDENTITY(1,1)`);
        await queryRunner.query(`ALTER TABLE "Pizza" ADD CONSTRAINT "PK_b85b8b8abbb1a048d216b42918c" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Pizza" DROP CONSTRAINT "PK_b85b8b8abbb1a048d216b42918c"`);
        await queryRunner.query(`ALTER TABLE "Pizza" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Pizza" ADD "id" uniqueidentifier NOT NULL CONSTRAINT "DF_b85b8b8abbb1a048d216b42918c" DEFAULT NEWSEQUENTIALID()`);
        await queryRunner.query(`ALTER TABLE "Pizza" ADD CONSTRAINT "PK_b85b8b8abbb1a048d216b42918c" PRIMARY KEY ("id")`);
    }

}
