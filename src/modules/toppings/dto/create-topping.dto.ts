import { MaxLength } from "class-validator";

export class CreateToppingDto {
    @MaxLength(256, { message: "topping's name too long" })
    name: string;
}
