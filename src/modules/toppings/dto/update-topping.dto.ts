import { MaxLength } from "class-validator";
export class UpdateToppingDto {
    @MaxLength(256, { message: "topping's name too long" })
    name: string;
}
