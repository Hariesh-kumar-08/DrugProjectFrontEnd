import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AdminLoginComponent } from "../components/admin-login/admin-login.component";
import { AuthService } from "./auth.service";

@Injectable()

export class RouteGuards implements CanActivate{

    constructor(private authService:AuthService,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if(this.authService.IsAuthenticated())
        {
            return true;
        }
        else{
            this.router.navigate(['/adminlogin']);
            return false;
        }

    }

}