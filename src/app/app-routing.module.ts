import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DataFormComponent } from './data-form/data-form.component';
import { SingleDataComponent } from './single-data/single-data.component';
import { CartComponent } from './cart/cart.component';
import { RegisterFormComponent } from './register-form/register-form.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product-list', component: DashboardComponent },
  { path: 'data-form', component: DataFormComponent },
  { path: 'single-data', component: SingleDataComponent },
  { path: 'cart', component: CartComponent },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
