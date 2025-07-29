import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppConfig, DbConfig } from "./config";
import { PizzasModule } from "./modules/pizzas/pizzas.module";
import { ToppingsModule } from "./modules/toppings/toppings.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            load: [AppConfig, DbConfig],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                ...configService.get("database"),
            }),
            inject: [ConfigService],
        }),
        PizzasModule,
        ToppingsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
