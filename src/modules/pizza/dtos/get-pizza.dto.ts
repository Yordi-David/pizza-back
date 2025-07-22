import { IsUUID, MaxLength } from "class-validator";

export class GetPizzaDto {
    @IsUUID("5", {message: 'Invalid Guid'})
    id: string;
    @MaxLength(256, {message: "Pizza's name too long"})
    name: string;
}