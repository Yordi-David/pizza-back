import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { controllers } from './controllers';
import { entities } from './entities/index';
import { services } from './services';

@Module({
    imports: [
        TypeOrmModule.forFeature([...entities])
    ],
    controllers: [
        ...controllers
    ],
    providers: [
        ...services
    ]
})
export class PizzaModule {

}