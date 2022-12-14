
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import validateForm from 'src/app/helpers/validateForm';
import { LoginService } from 'src/app/services/login.service';
import { UsersService } from 'src/app/services/users.service';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth:LoginService,private route:Router,private userObj:UsersService) { }
    type:string="password";
    isText:boolean=false;
    eyeIcon:string="fa-eye-slash";
    loginForm!:FormGroup;
    userId:number;
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      UserId:['',Validators.required],
      UserPassword:['',Validators.required]
    })
  }

  hideShowPassword(){
        this.isText=!this.isText;
        this.isText?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
        this.isText?this.type="text":this.type="password";
  }

  onLogin(){
     if(this.loginForm.valid)
     {
      console.log(this.loginForm.value)
      //send the obj to database
      this.auth.login(this.loginForm.value).subscribe({
        next:(res)=>{
           this.userObj.userId=res.userId;
           alert('Login successful');
            this.route.navigate(['/user-dashboard']);
            return true;
        },
        error:(err)=>{
          alert(err.error.message)
        }
      })
     }
     else{
      //throw error using toaster
          validateForm.validateAllFormFields(this.loginForm)
          alert('Your form is invalid')
     }
  }
  

}
