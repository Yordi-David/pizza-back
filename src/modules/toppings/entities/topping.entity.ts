import { PizzaEntity } from "src/modules/pizzas/entities";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Topping" })
export class ToppingEntity {
    constructor(toppingDto?: Partial<ToppingEntity>) {
        if (toppingDto) {
            this.fromDto(toppingDto);
        }
    }

    fromDto(toppingDto?: Partial<ToppingEntity>) {
        this.name = toppingDto?.name ?? "";
        this.pizzas = toppingDto?.pizzas ?? [];

        if (toppingDto?.id) {
            this.id = toppingDto.id;
        }
    }

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ name: "name" })
    public name: string;

    @ManyToMany(() => PizzaEntity, (pizza) => pizza.toppings)
    pizzas: PizzaEntity[];
}
