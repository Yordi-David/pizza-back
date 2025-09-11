import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as containers from './containers';
import { ProductsGuard } from './guards';

const routes: Routes = [
    {
        path: '',
        component: containers.ProductsComponent,
    },
    {
        path: ':id',
        canActivate: [ProductsGuard],
        component: containers.ProductItemComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
