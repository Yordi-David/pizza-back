import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from } from "rxjs";
import { CreatePizzaDto } from "../dto/create-pizza.dto";
import { UpdatePizzaDto } from "../dto/update-pizza.dto";
import { PizzaEntity } from "../entities";
import { PizzaRepository } from "../repositories";

@Injectable()
export class PizzasService {
    constructor(
        @InjectRepository(PizzaEntity) private pizzaRepository: PizzaRepository,
    ) {}

    create(createPizzaDto: CreatePizzaDto) {
        return "This action adds a new pizza";
    }

    findAll() {
        return from(this.pizzaRepository.find({}));
    }

    findOne(id: number) {
        return `This action returns a #${id} pizza`;
    }

    update(id: number, updatePizzaDto: UpdatePizzaDto) {
        return `This action updates a #${id} pizza`;
    }

    remove(id: number) {
        return `This action removes a #${id} pizza`;
    }
}
