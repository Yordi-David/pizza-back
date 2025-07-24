import { ToppingEntity } from "../../toppings/entities/topping.entity";
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "Pizza" })
export class PizzaEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ name: "name" })
    public name: string;

    @ManyToMany(() => ToppingEntity, (topping) => {}, {
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
    })
    @JoinTable({
        name: "PizzaToppings",
        joinColumn: {
            name: "pizzaId",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "toppingId",
            referencedColumnName: "id",
        },
    })
    toppings: ToppingEntity[];
}
