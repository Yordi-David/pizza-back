import { MigrationInterface, QueryRunner } from "typeorm";

export class PizzaAndToppings1753220063499 implements MigrationInterface {
    name = 'PizzaAndToppings1753220063499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`EXEC sp_rename "Pizza.dbo.Pizza.Id", "id"`);
        await queryRunner.query(`EXEC sp_rename "Pizza.dbo.Pizza.PK_436e6d77a937fa4ccf47e640aeb", "PK_b85b8b8abbb1a048d216b42918c"`);
        await queryRunner.query(`CREATE TABLE "toppings" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_6a1c9185d307454dfadc29f3019" DEFAULT NEWSEQUENTIALID(), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_6a1c9185d307454dfadc29f3019" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "PizzaToppings" ("pizzaId" uniqueidentifier NOT NULL, "toppingId" uniqueidentifier NOT NULL, CONSTRAINT "PK_8ae2bdbf628a02adcf71f13859a" PRIMARY KEY ("pizzaId", "toppingId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e050cd34e42e4024d50aaae245" ON "PizzaToppings" ("pizzaId") `);
        await queryRunner.query(`CREATE INDEX "IDX_3365628797a2290bfd6e140074" ON "PizzaToppings" ("toppingId") `);
        await queryRunner.query(`ALTER TABLE "Pizza" DROP CONSTRAINT "PK_b85b8b8abbb1a048d216b42918c"`);
        await queryRunner.query(`ALTER TABLE "Pizza" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Pizza" ADD "id" uniqueidentifier NOT NULL CONSTRAINT "DF_b85b8b8abbb1a048d216b42918c" DEFAULT NEWSEQUENTIALID()`);
        await queryRunner.query(`ALTER TABLE "Pizza" ADD CONSTRAINT "PK_b85b8b8abbb1a048d216b42918c" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "PizzaToppings" ADD CONSTRAINT "FK_e050cd34e42e4024d50aaae2450" FOREIGN KEY ("pizzaId") REFERENCES "Pizza"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "PizzaToppings" ADD CONSTRAINT "FK_3365628797a2290bfd6e1400742" FOREIGN KEY ("toppingId") REFERENCES "toppings"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "PizzaToppings" DROP CONSTRAINT "FK_3365628797a2290bfd6e1400742"`);
        await queryRunner.query(`ALTER TABLE "PizzaToppings" DROP CONSTRAINT "FK_e050cd34e42e4024d50aaae2450"`);
        await queryRunner.query(`ALTER TABLE "Pizza" DROP CONSTRAINT "PK_b85b8b8abbb1a048d216b42918c"`);
        await queryRunner.query(`ALTER TABLE "Pizza" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "Pizza" ADD "id" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Pizza" ADD CONSTRAINT "PK_b85b8b8abbb1a048d216b42918c" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP INDEX "IDX_3365628797a2290bfd6e140074" ON "PizzaToppings"`);
        await queryRunner.query(`DROP INDEX "IDX_e050cd34e42e4024d50aaae245" ON "PizzaToppings"`);
        await queryRunner.query(`DROP TABLE "PizzaToppings"`);
        await queryRunner.query(`DROP TABLE "toppings"`);
        await queryRunner.query(`EXEC sp_rename "Pizza.dbo.Pizza.PK_b85b8b8abbb1a048d216b42918c", "PK_436e6d77a937fa4ccf47e640aeb"`);
        await queryRunner.query(`EXEC sp_rename "Pizza.dbo.Pizza.id", "Id"`);
    }

}
