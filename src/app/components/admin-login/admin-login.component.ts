import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup/public-api';
import { Admin } from 'src/app/models/admin';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private api:ApiService,private auth:AuthService,private router:Router,private toast:NgToastService) { }
  AdminLoginForm:FormGroup;
  id:number;
  AdminObj:Admin={
    AdminId: 0,
    AdminName: '',
    AdminPassword: ''
  };
  AdminAuthenticator:Admin;
  ngOnInit(): void {
    this.AdminLoginForm=this.fb.group({
      AdminId:['',Validators.required],
      AdminPassword:['',Validators.required]
    })

  }
  onAdminLogin(){
    console.log(this.AdminLoginForm);
        this.id=this.AdminLoginForm.value.AdminId;
        this.AdminObj.AdminId=this.AdminLoginForm.value.AdminId;
        this.AdminObj.AdminPassword=this.AdminLoginForm.value.AdminPassword;
         this.api.AdminLogin(this.id,this.AdminObj)
         .subscribe((res)=>{
               this.AdminAuthenticator=res;
               console.log(this.AdminAuthenticator);
               if(res!=null)
               {
                this.auth.login();
                this.router.navigate(['/admindashboard']);
                this.AdminLoginForm.reset();
               }
               else{
                     alert('Invalid credentials');
                     this.AdminLoginForm.reset();
               }
              },
         (err)=>{
          console.log(err.message)
         })
  }

}
