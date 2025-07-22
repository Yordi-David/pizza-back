import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PizzaEntity } from "../entities";
import { Repository } from "typeorm";
import { from, Observable } from "rxjs";

@Injectable()
export class PizzaService {
    constructor(@InjectRepository(PizzaEntity) private pizzaService: Repository<PizzaEntity>) {}

    getAll(): Observable<PizzaEntity[]> {
        return from(this.pizzaService.find())
    }
}