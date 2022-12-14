import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DrugProjectFrontEnd';
  userId:number;
  constructor(private http:HttpClient,private userobj:UsersService){}
  ngOnInit(): void {
    this.userobj.GetCart(this.userobj.userId);
    }
  onUserCreate(users:{UserName:string,Number:string,email:string,password:string,location:string})
  {
    console.log(users);
    this.http.post<any>('https://localhost:7289/api/Login',users).subscribe((res)=>{
      console.log(res);
    })
  }
}

