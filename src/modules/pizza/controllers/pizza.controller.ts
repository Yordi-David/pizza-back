import { Controller, Get } from '@nestjs/common';
import { PizzaService } from '../services/pizza.service';

@Controller('pizza')
export class PizzaController {
    constructor(private pizzaService: PizzaService) {}
    @Get('pizzas')
    getAllPizzas() {
        return this.pizzaService.getAllPizzas();
    }

    @Get('toppings')
    getAllToppingd() {
        return this.pizzaService.getAllToppings()
    }
}