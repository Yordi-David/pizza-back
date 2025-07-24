import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from "@nestjs/common";
import { CreatePizzaDto } from "./dto/create-pizza.dto";
import { UpdatePizzaDto } from "./dto/update-pizza.dto";
import { PizzasService } from "./services/pizzas.service";

@Controller("pizzas")
export class PizzasController {
    constructor(private readonly pizzasService: PizzasService) {}

    @Post()
    create(@Body() createPizzaDto: CreatePizzaDto) {
        return this.pizzasService.create(createPizzaDto);
    }

    @Get()
    findAll() {
        // return this.pizzaService.getAll()
        return [
            {
                name: "The Inferno",
                toppings: [
                    "chili",
                    // "bacon",
                    // "mushroom",
                    // "basil",
                    // "pepperoni",
                    // "olive",
                    // "sweetcorn",
                    // "anchovy",
                    // "mozzarella",
                    // "pepper",
                    // "tomato",
                ],
                id: 1,
            },
        ];
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.pizzasService.findOne(+id);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() updatePizzaDto: UpdatePizzaDto) {
        return this.pizzasService.update(+id, updatePizzaDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.pizzasService.remove(+id);
    }
}
