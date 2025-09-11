import { ToppingEntity } from "src/modules/toppings/entities/topping.entity";
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "Pizza" })
export class PizzaEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ name: "name", unique: true })
    public name: string;

    @ManyToMany(() => ToppingEntity, (topping) => topping.pizzas)
    @JoinTable()
    toppings: ToppingEntity[];
}
