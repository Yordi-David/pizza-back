import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Pizza } from '../models';

@Injectable()
export class PizzasService {
  constructor(private http: HttpClient) {}

  public getPizzas(): Observable<Pizza[]> {
    return this.http
      .get<Pizza[]>(`${environment.baseUrl}/pizzas`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error.error)));
  }

  public getPizza(id: number): Observable<Pizza> {
    return this.http
      .get<Pizza>(`${environment.baseUrl}/pizzas/${id}`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error.error)));
  }

  public createPizza(pizza: Pizza): Observable<string> {
    const payload = {...pizza, toppings: pizza.toppings?.map(t => t.id)}
    return this.http
      .post<string>(`${environment.baseUrl}/pizzas`, payload)
      .pipe(
        catchError((error: HttpErrorResponse) => throwError(error.error))
    );
  }

  public updatePizza(pizza: Pizza): Observable<void> {
    const payload = {...pizza, toppings: pizza.toppings?.map(t => t.id)}
    return this.http
      .put<void>(`${environment.baseUrl}/pizzas/${payload.id}`, payload)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error.error)));
  }

  public removePizza(payload: Pizza): Observable<string> {
    return this.http
      .delete<string>(`${environment.baseUrl}/pizzas/${payload.id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => throwError(error.error))
    );
  }
}
