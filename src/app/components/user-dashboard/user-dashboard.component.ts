import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderDetail } from 'src/app/models/order-detail';
import { Product } from 'src/app/models/products-dashboard.model';
import { ApiService } from 'src/app/services/api.service';
import { UsersService } from 'src/app/services/users.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private api:ApiService,private userObj:UsersService,private fb:FormBuilder,private route:Router) { }
  productsList:Product[]=[];
  notifyMe:string="fa fa-bell";
  notifyText:string="Notify Me";
  cartItem:OrderDetail=new OrderDetail();
  quantity:number;
  quantityForm:FormGroup;
  
  ngOnInit(): void {
    this.quantityForm=this.fb.group({
      
    })
    this.getProducts();
  }
   
  imgProperty:string[]=["assets/images/20220204_dolo_lead_01.webp",];
 

  getProducts()
  {
     this.api.getProducts().subscribe((res)=>{
        console.log(res);
        this.productsList=res;
        console.log(this.productsList.values);

      });
  }

  subscribeBellNotification(){
    if(this.notifyMe!="fa fa-bell-slash")
    {
      this.notifyMe="fa fa-bell-slash";
      this.notifyText="Notified"
    }
    else{
      this.notifyMe="fa fa-bell";
      this.notifyText="Notify Me"
    }
   
  }

  AddProductToCart(product){
    console.log(product);
    console.log(this.quantity)
  this.userObj.product=product;
  console.log(product);
   this.route.navigate(['/cart-form'])
    this.cartItem.productId=product.productId;
    this.cartItem.userId=this.userObj.userId;
    console.log(this.userObj.userId);
  }

}
