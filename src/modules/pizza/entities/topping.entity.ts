import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'toppings'})
export class ToppingEntity {
    @PrimaryGeneratedColumn('uuid')
        public id: string;
    
    @Column({name: 'name'})
        public name: string;
}