import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import validateForm from 'src/app/helpers/validateForm';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth:LoginService) { }
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";
  signUp!:FormGroup;
  ngOnInit(): void {
    this.signUp=this.fb.group({
      UserName:['',Validators.required],
      Email:['',Validators.required],
      PhoneNumber:['',Validators.required],
      loc:['',Validators.required],
      UserPassword:['',Validators.required]
    })
  }

  hideShowPassword(){
    this.isText=!this.isText;
    this.isText?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText?this.type="text":this.type="password";
}

onSignUp(){
  if(this.signUp.valid)
  {
    console.log(this.signUp.value);
   //send the obj to database
   this.auth.signUp(this.signUp.value)
   /* .subscribe({next:(res=>{
    alert(res.message)
   })
   ,error:(err=>{
    alert(err?.error.message)
   })
  }) */
  }
  else{
    validateForm.validateAllFormFields(this.signUp)
   
  }
}



}
