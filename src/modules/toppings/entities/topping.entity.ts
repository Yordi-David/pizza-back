import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "toppings" })
export class ToppingEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ name: "name" })
    public name: string;
}
