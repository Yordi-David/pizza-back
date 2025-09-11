import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from "@nestjs/common";
import { CreateToppingDto } from "./dto/create-topping.dto";
import { UpdateToppingDto } from "./dto/update-topping.dto";
import { ToppingsService } from "./toppings.service";
import { map } from "rxjs";

@Controller("toppings")
export class ToppingsController {
    constructor(private readonly toppingsService: ToppingsService) {}

    @Post()
    create(@Body() createToppingDto: CreateToppingDto) {
        return this.toppingsService.create(createToppingDto).pipe(
            map((resp) => {
                return `Le topping "${resp.name}" a bien été créé`;
            }),
        );
    }

    @Get()
    findAll() {
        return this.toppingsService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.toppingsService.findOne(+id);
    }

    @Put(":id")
    update(
        @Param("id") id: string,
        @Body() updateToppingDto: UpdateToppingDto,
    ) {
        return this.toppingsService.update(+id, updateToppingDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.toppingsService
            .remove(+id)
            .pipe(map(() => `Le topping a bien été supprimé`));
    }
}
