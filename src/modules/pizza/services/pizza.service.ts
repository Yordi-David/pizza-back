import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { PizzaEntity, ToppingEntity } from '../entities';

@Injectable()
export class PizzaService {
    constructor(
        @InjectRepository(PizzaEntity) private pizzaRepository: Repository<PizzaEntity>,
        @InjectRepository(ToppingEntity) private toppingRepository: Repository<ToppingEntity>
    ) { }

    public getAllPizzas(): Observable<PizzaEntity[]> {
        return from(this.pizzaRepository.find())
    }

    public createPizza(pizza: PizzaEntity): Observable<PizzaEntity> {
        return from(this.pizzaRepository.save(pizza))
    }

    public getAllToppings(): Observable<ToppingEntity[]> {
        return from(this.toppingRepository.find())
    }
}