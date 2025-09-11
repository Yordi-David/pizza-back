import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable, switchMap } from "rxjs";
import { Repository } from "typeorm";
import { CreatePizzaDto } from "../dto/create-pizza.dto";
import { UpdatePizzaDto } from "../dto/update-pizza.dto";
import { PizzaEntity } from "../entities";
import { ToppingEntity } from "src/modules/toppings/entities";

@Injectable()
export class PizzasService {
    constructor(
        @InjectRepository(PizzaEntity)
        private pizzaRepository: Repository<PizzaEntity>,
    ) {}

    create(createPizzaDto: CreatePizzaDto) {
        try {
            const newPizza = new PizzaEntity();
            newPizza.name = createPizzaDto.name;
            newPizza.toppings = createPizzaDto.toppings.map((toppingId) => {
                return new ToppingEntity({ id: toppingId });
            });
            return from(
                this.pizzaRepository.save(
                    this.pizzaRepository.create(newPizza),
                ),
            );
        } catch (error) {
            console.error(error);
            throw new Error("Impossible de trouver la pizza recherchée");
        }
    }

    findAll() {
        return from(
            this.pizzaRepository.find({
                relations: {
                    toppings: true,
                },
            }),
        );
    }

    findOne(id: number) {
        try {
            return from(
                this.pizzaRepository.findOne({
                    relations: {
                        toppings: true,
                    },
                    where: {
                        id,
                    },
                }),
            );
        } catch (error) {
            console.error(error);
            throw new Error("Impossible de trouver la pizza recherchée");
        }
    }

    update(
        id: number,
        updatePizzaDto: UpdatePizzaDto,
    ): Observable<PizzaEntity | null> {
        try {
            const pizzaToUpdate$ = this.findOne(id);
            return pizzaToUpdate$.pipe(
                switchMap((pizzaToUpdate) => {
                    if (pizzaToUpdate) {
                        pizzaToUpdate.name = updatePizzaDto.name;
                        pizzaToUpdate.toppings = updatePizzaDto.toppings.map(
                            (toppingId) => {
                                return new ToppingEntity({ id: toppingId });
                            },
                        );
                        return this.pizzaRepository.save(pizzaToUpdate);
                    } else {
                        throw new Error(
                            "Impossible de trouver la pizza recherchée",
                        );
                    }
                }),
            );
        } catch (error) {
            console.error(error);
            throw new Error("Impossible de trouver la pizza recherchée");
        }
    }

    remove(id: number) {
        try {
            return from(this.pizzaRepository.delete({ ["id"]: id }));
        } catch (error) {
            console.error(error);
            throw new Error("Impossible de trouver la pizza recherchée");
        }
    }
}
