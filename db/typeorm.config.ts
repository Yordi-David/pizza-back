import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";
import { config } from "dotenv";

config();

const configService = new ConfigService();

export default new DataSource({
    type: "mssql",
    host: configService.get("DB_HOST"),
    port: parseInt(configService.get("DB_SERVER_PORT")!),
    username: configService.get("DB_USER"),
    password: configService.get("DB_PASSWORD"),
    database: configService.get("DB_NAME"),
    entities: [`${__dirname}/../src/**/*.entity.{js,ts}`],
    synchronize: configService.get("nodenv") === "development",
    logging: configService.get("nodenv") === "development",
    migrations: [`${__dirname}/migrations/*{.ts,.js}`],
    migrationsTableName: configService.get("DB_MIGRATION_TABLE"),
    options: { trustServerCertificate: true },
});
