import { MaxLength } from "class-validator";

export class CreatePizzaDto {
    @MaxLength(256, { message: "Pizza's name too long" })
    name: string;

    toppings: number[];
}
