import { PizzaEntity } from "./../entities/pizza.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class PizzaRepository extends Repository<PizzaEntity> {
    constructor(private dataSource: DataSource) {
        super(PizzaEntity, dataSource.createEntityManager());
    }
}
