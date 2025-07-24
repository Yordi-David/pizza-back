import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { PizzaEntity } from "../entities/pizza.entity";

@Injectable()
export class PizzaRepository extends Repository<PizzaEntity> {
    constructor(private dataSource: DataSource) {
        super(PizzaEntity, dataSource.createEntityManager());
    }
}
