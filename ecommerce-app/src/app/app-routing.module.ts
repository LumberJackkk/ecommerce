import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductsDetailsComponent } from './components/products/products-details/products-details.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { ProductsFormComponent } from './components/products/products-form/products-form.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/form', component: ProductsFormComponent },
  { path: 'products/form/:id', component: ProductsFormComponent },
  { path: 'products/details/:id', component: ProductsDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/form', component: UserFormComponent },
  { path: 'users/form/:id', component: UserFormComponent },
  { path: 'shopping', component: ShoppingCartComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
