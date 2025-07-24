import { Module } from "@nestjs/common";
import { services } from "./services/index";
import { TypeOrmModule } from "@nestjs/typeorm";
import { repositories } from "../pizzas/repositories/index";
import { entities } from "./entities/index";
import { PizzasController } from "./pizzas.controller";

@Module({
    imports: [TypeOrmModule.forFeature([...entities])],
    controllers: [PizzasController],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    providers: [...services, ...repositories],
})
export class PizzasModule {}
