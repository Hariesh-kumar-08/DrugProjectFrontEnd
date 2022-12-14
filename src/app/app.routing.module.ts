import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AdminLoginComponent } from "./components/admin-login/admin-login.component";
import { BuyerFormComponent } from "./components/buyer-form/buyer-form.component";
import { CartFormComponent } from "./components/cart-form/cart-form.component";
import { CartComponent } from "./components/cart/cart.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductDashboardComponent } from "./components/product-dashboard/product-dashboard.component";
import { PurchaseSummaryComponent } from "./components/purchase-summary/purchase-summary.component";
import { SignupComponent } from "./components/signup/signup.component";
import { UserDashboardComponent } from "./components/user-dashboard/user-dashboard.component";
import { ViewTemplatesComponent } from "./components/view-templates/view-templates.component";
import { RouteGuards } from "./services/RouteGuardsService.service";

const routes:Routes=[
   {path:'',component:HomePageComponent},
   {path:'login',component:LoginComponent},
   {path:'signup',component:SignupComponent},
   {path:'adminlogin',component:AdminLoginComponent},
   {path:'admindashboard',component:ProductDashboardComponent,canActivate:[RouteGuards]},
   {path:'user-dashboard',component:UserDashboardComponent},
   {path:'cart-form',component:CartFormComponent},
   {path:'cart',component:CartComponent},
   {path:'buy',component:BuyerFormComponent},
   {path:'summary',component:PurchaseSummaryComponent}
];

@NgModule({
   imports:[RouterModule.forRoot(routes)],
   exports:[RouterModule]
})

export class AppRoutingModule{
    
}