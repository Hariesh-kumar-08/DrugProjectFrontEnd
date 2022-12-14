import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { OrderDetail } from '../models/order-detail';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    
  constructor(private http:HttpClient) { }
    userId:number;
  AddToCart(cartItem){
    this.http.put<OrderDetail>("https://localhost:7289/api/Methods",cartItem)
    .pipe(map((res:any)=>{
      return res
    }))

  }
}
