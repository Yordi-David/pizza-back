import { Module } from "@nestjs/common";
import { ToppingsService } from "./toppings.service";
import { ToppingsController } from "./toppings.controller";
import { entities } from "./entities";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([...entities])],
    controllers: [ToppingsController],
    providers: [ToppingsService],
})
export class ToppingsModule {}
