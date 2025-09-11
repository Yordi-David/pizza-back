import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Topping } from '../models';

@Injectable()
export class ToppingsService {
  constructor(private http: HttpClient) {}

  getToppings(): Observable<Topping[]> {
    return this.http
      .get<Topping[]>(`${environment.baseUrl}/toppings`)
      .pipe(
        catchError((error: HttpErrorResponse) => throwError(error.error))
    );
  }
}
