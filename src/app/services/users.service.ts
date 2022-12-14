import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { findIndex, map } from 'rxjs';
import { OrderDetail } from '../models/order-detail';
import { Product } from '../models/products-dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService  {
    
  constructor(private http:HttpClient,private route:Router) { }
    userId:number;
    product:Product=new Product();
    filteredCartProducts:Product[]=[];
    cartItems:OrderDetail[]=[];
    cartLength:number;
    TotalAmount:number;
    

    
  AddToCart(cartItem,id){
    this.http.put<OrderDetail>("https://localhost:7289/api/Methods/"+id,cartItem)
    .pipe(map((res:any)=>{
      return res
    }))
    .subscribe((res)=>{
      alert('Item added to cart');
      this.route.navigate(['/cart'])
    
    })

  }

  GetCart(id){
    this.http.get<any>("https://localhost:7289/api/Methods/"+id)
    .pipe(map((res:any)=>{
      return res
    }))
    .subscribe((res)=>{
      this.filteredCartProducts=[];

        for(let response of res)  {
            this.http.get<any>("https://localhost:7289/api/Products/"+response.productId)
            .subscribe((productdetail)=>{
              this.filteredCartProducts.push(productdetail);
                  console.log(this.filteredCartProducts)

                  return res;
            })
        } 
        this.cartItems=res;
        this.cartLength=this.cartItems.length;
        console.log(this.cartItems);
        
    })
   }




   BuyProducts(BuyerObj){
    BuyerObj.TotalAmount=this.calculateTotalAmount();
    this.http.post("https://localhost:7289/api/Methods/",BuyerObj)
    .subscribe((res)=>{
      alert('Thanks for the purchase')
      this.route.navigate(['/summary'])
      return res;
    })
   }

   calculateTotalAmount(){
    this.TotalAmount=0;
    for(let i=0;i<this.cartItems.length;i++)
    {
      
         this.TotalAmount+=(this.filteredCartProducts[i].price*this.cartItems[i].quantity);    
      
      
    }
    return this.TotalAmount;
   }
 }
