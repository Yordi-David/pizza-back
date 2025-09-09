import { registerAs } from "@nestjs/config";

export default registerAs("database", () => {
    return {
        type: "mssql",
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_SERVER_PORT!, 10),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [`${__dirname}/../**/*.entity.{js,ts}`],
        synchronize: process.env.NODE_ENV === "development",
        logging: process.env.NODE_ENV === "development",
        migrations: [`${__dirname}/../..db/migrations/*{.ts,.js}`],
        migrationsTableName: process.env.DB_MIGRATION_TABLE,
        options: { trustServerCertificate: true },
    };
});
