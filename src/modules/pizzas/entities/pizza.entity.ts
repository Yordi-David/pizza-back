import {
    Column,
    Entity,
    // JoinTable,
    // ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
// import { ToppingEntity } from "../../toppings/entities/topping.entity";

@Entity({ name: "Pizza" })
export class PizzaEntity {
    @PrimaryGeneratedColumn()
    public pizzaId: number;

    @Column({ name: "name", unique: true })
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
