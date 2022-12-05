import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    //We need to have the url to hit the api
      private baseURL:string="https://localhost:7289/api/Login";
      //We need to inject the httpclient
  constructor(private http:HttpClient) { }
  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

  signUp(userObj:User){
        return this.http.post<any>("https://localhost:7289/api/Login",userObj,).subscribe((res)=>{
             console.log(res); 
        });
  }

  login(loginObj:User){
    return this.http.post<any>("https://localhost:7289/api/Login",loginObj)

  }
}
