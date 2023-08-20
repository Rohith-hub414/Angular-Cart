import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './services/data.service';
import { DataFormComponent } from './data-form/data-form.component';
import { SingleDataComponent } from './single-data/single-data.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    DataFormComponent,
    SingleDataComponent,
    CartComponent,
      RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DataService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
