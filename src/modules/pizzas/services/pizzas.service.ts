import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable, switchMap } from "rxjs";
import { Repository } from "typeorm";
import { CreatePizzaDto } from "../dto/create-pizza.dto";
import { UpdatePizzaDto } from "../dto/update-pizza.dto";
import { PizzaEntity } from "../entities";

@Injectable()
export class PizzasService {
    constructor(
        @InjectRepository(PizzaEntity)
        private pizzaRepository: Repository<PizzaEntity>,
    ) {}

    create(createPizzaDto: CreatePizzaDto) {
        try {
            return from(
                this.pizzaRepository.save(
                    this.pizzaRepository.create(createPizzaDto),
                ),
            );
        } catch (error) {
            console.error(error);
            throw new Error("Impossible de trouver la pizza recherchée");
        }
    }

    findAll() {
        return from(this.pizzaRepository.find({}));
    }

    findOne(id: number) {
        try {
            return from(this.pizzaRepository.findOneBy({ ["pizzaId"]: id }));
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
            return from(
                this.pizzaRepository
                    .createQueryBuilder()
                    .update(PizzaEntity)
                    .set({ name: updatePizzaDto.name })
                    .where("pizzaId = :id", { id })
                    .execute(),
            ).pipe(
                switchMap(() => {
                    return this.findOne(id);
                }),
            );
        } catch (error) {
            console.error(error);
            throw new Error("Impossible de trouver la pizza recherchée");
        }
    }

    remove(id: number) {
        try {
            return from(this.pizzaRepository.delete({ ["pizzaId"]: id }));
        } catch (error) {
            console.error(error);
            throw new Error("Impossible de trouver la pizza recherchée");
        }
    }
}
