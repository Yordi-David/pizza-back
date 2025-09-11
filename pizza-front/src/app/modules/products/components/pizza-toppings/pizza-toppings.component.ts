import { BehaviorSubject } from 'rxjs';
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Topping } from '../../models';

@Component({
    selector: 'app-pizza-toppings',
    templateUrl: './pizza-toppings.component.html',
    styleUrls: ['./pizza-toppings.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PizzaToppingsComponent),
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class PizzaToppingsComponent implements ControlValueAccessor {

    @Input() allToppings: Topping[] = [];
    public selectedToppings$ = new BehaviorSubject<{[key: number]: Topping | false}>({});

    constructor() { }

    writeValue(toppings: Topping[]): void {
        this.selectedToppings$.next(toppings.reduce((result, item) => {
            result[item.id] = item;
            return result;
        }, {} as {[key: number]: Topping | false}));
    }

    private onChange = (toppings: Topping[]) => {};
    private onTouch = () => {};

    registerOnChange(fn: (toppings: Topping[]) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouch = fn;
    }

    public toggleItem(topping: Topping): void {
        const currentSelection = this.selectedToppings$.getValue();
        const newSelection = {
            ...currentSelection,
            [topping.id]: !currentSelection[topping.id] ? topping : false
        };
        this.selectedToppings$.next(newSelection as {[x: number]: Topping | false});
        const newSelectionArray: Topping[] = [];
        Object.keys(newSelection).forEach(key => {
            if (newSelection[+key]) {
                newSelectionArray.push(newSelection[+key] as Topping);
            }
        });
        this.onChange(newSelectionArray);
    }

}
