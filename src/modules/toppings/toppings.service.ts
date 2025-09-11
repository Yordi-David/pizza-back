import { Injectable } from "@nestjs/common";
import { CreateToppingDto } from "./dto/create-topping.dto";
import { UpdateToppingDto } from "./dto/update-topping.dto";
import { ToppingEntity } from "./entities/topping.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { from, Observable, switchMap } from "rxjs";

@Injectable()
export class ToppingsService {
    constructor(
        @InjectRepository(ToppingEntity)
        private toppingRepository: Repository<ToppingEntity>,
    ) {}

    create(createToppingDto: CreateToppingDto) {
        try {
            return from(
                this.toppingRepository.save(
                    this.toppingRepository.create(createToppingDto),
                ),
            );
        } catch (error) {
            console.error(error);
            throw new Error("Impossible de trouver le topping recherché");
        }
    }

    findAll() {
        return from(this.toppingRepository.find({}));
    }

    findOne(id: number) {
        try {
            return from(this.toppingRepository.findOneBy({ ["id"]: id }));
        } catch (error) {
            console.error(error);
            throw new Error("Impossible de trouver le topping recherché");
        }
    }

    update(
        id: number,
        updateToppingDto: UpdateToppingDto,
    ): Observable<ToppingEntity | null> {
        try {
            return from(
                this.toppingRepository
                    .createQueryBuilder()
                    .update(ToppingEntity)
                    .set({ name: updateToppingDto.name })
                    .where("toppingId = :id", { id })
                    .execute(),
            ).pipe(
                switchMap(() => {
                    return this.findOne(id);
                }),
            );
        } catch (error) {
            console.error(error);
            throw new Error("Impossible de trouver le topping recherché");
        }
    }

    remove(id: number) {
        try {
            return from(this.toppingRepository.delete({ ["id"]: id }));
        } catch (error) {
            console.error(error);
            throw new Error("Impossible de trouver le topping recherché");
        }
    }
}
