import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { ToppingEntity } from "../../toppings/entities/topping.entity";

@Entity({ name: "Pizza" })
export class PizzaEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ name: "name" })
    public name: string;

    // @ManyToMany(() => ToppingEntity, (topping) => {}, {
    //     onDelete: "NO ACTION",
    //     onUpdate: "NO ACTION",
    // })
    // @JoinTable({
    //     name: "PizzaToppings",
    //     joinColumn: {
    //         name: "pizzaId",
    //         referencedColumnName: "id",
    //     },
    //     inverseJoinColumn: {
    //         name: "toppingId",
    //         referencedColumnName: "id",
    //     },
    // })
    // toppings: ToppingEntity[];
}
