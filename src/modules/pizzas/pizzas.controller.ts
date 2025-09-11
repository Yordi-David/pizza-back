import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from "@nestjs/common";
import { map, Observable } from "rxjs";
import { CreatePizzaDto } from "./dto/create-pizza.dto";
import { UpdatePizzaDto } from "./dto/update-pizza.dto";
import { PizzaEntity } from "./entities";
import { PizzasService } from "./services/pizzas.service";

@Controller("pizzas")
export class PizzasController {
    constructor(private readonly pizzasService: PizzasService) {}

    @Post() // CREATE A NEW PIZZA AND ADD IT IN DATABASE
    create(@Body() createPizzaDto: CreatePizzaDto): Observable<any> {
        return this.pizzasService.create(createPizzaDto).pipe(
            map((resp) => {
                return { message: `La pizza "${resp.name}" a bien été créée` };
            }),
        );
    }

    @Get() // RETURN ALL THE EXISTINGS PIZZAS IN THE DATABASE
    findAll(): Observable<PizzaEntity[]> {
        return this.pizzasService.findAll();
    }

    @Get(":id") // RETURN ONE SPECIFIC PIZZA WITH THE GIVEN ID
    findOne(
        @Param("id", ParseIntPipe) id: number,
    ): Observable<PizzaEntity | null> {
        return this.pizzasService.findOne(id);
    }

    @Put(":id") // UPDATE ONE SPECIFIC PIZZA WITH THE GIVEN ID AND RETURN IT
    update(
        @Param("id") id: string,
        @Body() updatePizzaDto: UpdatePizzaDto,
    ): Observable<PizzaEntity | null> {
        return this.pizzasService.update(+id, updatePizzaDto);
    }

    @Delete(":id") // DELETE ONE SPECIFIC PIZZA WITH THE GIVEN ID
    remove(@Param("id") id: string) {
        return this.pizzasService.remove(+id).pipe(
            map(() => {
                return { message: `La pizza a bien été supprimée` };
            }),
        );
    }
}
