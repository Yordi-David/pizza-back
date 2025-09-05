import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PizzaEntity } from "../entities";
import { Repository } from "typeorm";
import { from, Observable } from "rxjs";
import { ToppingEntity } from "../entities/topping.entity";

@Injectable()
export class PizzaService {
    constructor(
        @InjectRepository(PizzaEntity) private pizzaService: Repository<PizzaEntity>,
        @InjectRepository(ToppingEntity) private toppingService: Repository<ToppingEntity>
    ) {}

    public getAllPizzas(): Observable<PizzaEntity[]> {
        return from(this.pizzaService.find())
    }

    public createPizza(pizza: PizzaEntity): Observable<PizzaEntity> {
        return from(this.pizzaService.save(pizza))
    }

    public getAllToppings(): Observable<ToppingEntity[]> {
        return from(this.toppingService.find())
    }
}