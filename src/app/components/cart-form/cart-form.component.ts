import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OrderDetail } from 'src/app/models/order-detail';
import { Product } from 'src/app/models/products-dashboard.model';
import { ApiService } from 'src/app/services/api.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit,OnChanges {

  constructor(private userObj:UsersService,private api:ApiService) { }
  cartForm:FormGroup;
  
  ngOnChanges(changes: SimpleChanges): void {
    this.product=this.userObj.product;
    this.TotalPrice=this.quantity*this.product.price;
  }

  product:Product=new Product();
  
  quantity:number;
  TotalPrice:number;
  cartItem:OrderDetail=new OrderDetail();

  

  ngOnInit(): void {
    console.log(this.userObj.product)
   this.product=this.userObj.product;
    console.log(this.product);
    
  }
    
  AddToCart()
  {
         console.log(this.quantity);
         console.log(this.userObj.userId);
         this.cartItem.productId=this.product.productId;
         this.cartItem.quantity=this.quantity;
         this.cartItem.userId=this.userObj.userId;
         this.cartItem.purchaseId=null;
         //this.userObj.AddToCart(this.cartItem);
         this.userObj.AddToCart(this.cartItem,this.product.productId);
 }
  
    


}
