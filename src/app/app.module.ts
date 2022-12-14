import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component'
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { RouteGuards } from './services/RouteGuardsService.service';
import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';
import { ApiService } from './services/api.service';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ViewTemplatesComponent } from './components/view-templates/view-templates.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { CartFormComponent } from './components/cart-form/cart-form.component';
import { UsersService } from './services/users.service';
import { BuyerFormComponent } from './components/buyer-form/buyer-form.component';
import { PurchaseSummaryComponent } from './components/purchase-summary/purchase-summary.component';
import { NgToastModule } from 'ng-angular-popup';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProductDashboardComponent,
    AdminLoginComponent,
    HomePageComponent,
    ViewTemplatesComponent,
    UserDashboardComponent,
    CartComponent,
    MainNavComponent,
    CartFormComponent,
    BuyerFormComponent,
    PurchaseSummaryComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  
  providers: [RouteGuards,AuthService,LoginService,ApiService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
