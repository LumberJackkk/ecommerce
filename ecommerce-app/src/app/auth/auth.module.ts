import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisrterComponent } from './pages/regisrter/regisrter.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    RegisrterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
