import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AdminLoginComponent } from "./components/admin-login/admin-login.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductDashboardComponent } from "./components/product-dashboard/product-dashboard.component";
import { SignupComponent } from "./components/signup/signup.component";
import { RouteGuards } from "./services/RouteGuardsService.service";

const routes:Routes=[
   {path:'login',component:LoginComponent},
   {path:'signup',component:SignupComponent},
   {path:'adminlogin',component:AdminLoginComponent},
   {path:'admindashboard',component:ProductDashboardComponent}

];

@NgModule({
   imports:[RouterModule.forRoot(routes)],
   exports:[RouterModule]
})

export class AppRoutingModule{
    
}