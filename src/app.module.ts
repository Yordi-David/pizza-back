import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppConfig, DbConfig } from "./config";
import { PizzaModule } from "./modules/pizza/pizza.module";

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
        PizzaModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
