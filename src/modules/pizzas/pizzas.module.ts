import { Module } from "@nestjs/common";
import { services } from "./services/index";
import { TypeOrmModule } from "@nestjs/typeorm";
import { entities } from "./entities/index";
import { PizzasController } from "./pizzas.controller";

@Module({
    imports: [TypeOrmModule.forFeature([...entities])],
    controllers: [PizzasController],
    providers: [...services],
})
export class PizzasModule {}
