import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Product } from '../models/products-dashboard.model';
import { OrderDetail } from '../models/order-detail';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postProducts(data:any)
  {
    return this.http.post<any>("https://localhost:7289/api/Products",data)
    .pipe(map((res:any)=>{
      return res
    }))
  }

  getProducts(){
    return this.http.get<Product>("https://localhost:7289/api/Products")
    .pipe(map((res:any)=>{
      return res
    }))
  }

  deleteProducts(id){
    return this.http.delete<any>("https://localhost:7289/api/Products/"+id)
    .pipe(map((res:any)=>{
      return res
    }))
  }

  editProducts(productModelObj,id){
    return this.http.put("https://localhost:7289/api/Products/"+id,productModelObj)
    .pipe(map((res:any)=>{
      return res
    }))
  }

  getProductDetails(id){
         return this.http.get("https://localhost:7289/api/Products/"+id)
         .pipe(map((res:any)=>{
          return res
        }))
    
  }

  AdminLogin(id,AdminFormData){
    return this.http.post("https://localhost:7289/api/Login/"+id,AdminFormData)
    .pipe(map((res:any)=>{
      return res
    }))
  }

  AddToCart(data){
    return this.http.put<any>("https://localhost:7289/api/Methods/"+data.productId,data)
    .pipe(map((res:any)=>{
      return res
    }))

  }


}
