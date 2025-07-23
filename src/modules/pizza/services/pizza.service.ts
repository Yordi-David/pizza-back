import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PizzaEntity } from "../entities";
import { from, Observable } from "rxjs";
import { PizzaRepository } from "../repositories/pizza.repository";

@Injectable()
export class PizzaService {
    constructor(
        @InjectRepository(PizzaEntity) private pizzaRepository: PizzaRepository,
    ) {}

    getAll(): Observable<PizzaEntity[]> {
        return from(this.pizzaRepository.find({}));
    }
}
