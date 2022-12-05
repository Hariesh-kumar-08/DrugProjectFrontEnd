import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DrugProjectFrontEnd';
  
  constructor(private http:HttpClient ){}
  onUserCreate(users:{UserName:string,Number:string,email:string,password:string,location:string})
  {
    console.log(users);
    this.http.post<any>('https://localhost:7289/api/Login',users).subscribe((res)=>{
      console.log(res);
    })
  }
}

