
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import validateForm from 'src/app/helpers/validateForm';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth:LoginService) { }
    type:string="password";
    isText:boolean=false;
    eyeIcon:string="fa-eye-slash";
    loginForm!:FormGroup;
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
            alert(res.message)
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
