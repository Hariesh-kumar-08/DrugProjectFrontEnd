import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/products-dashboard.model';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs';
import { OrderDetail } from 'src/app/models/order-detail';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  filteredCartProducts: Product[];

  constructor(private userobj:UsersService,private http:HttpClient) { }

  count:number=0;
  public cartproducts:Product[]=[];
  public cartItems:OrderDetail[]=[];
  TotalAmount:number;
  

  ngOnInit(): void {
    if(this.count==0)
    {
      this.count++;
      this.GetCart();
      this.cartproducts= this.userobj.filteredCartProducts;
      this.cartItems=this.userobj.cartItems;
      console.log(this.cartItems)
      console.log(this.userobj.filteredCartProducts);
     console.log(this.userobj.cartItems);
      console.log(this.cartproducts);
      this.TotalAmount=this.userobj.calculateTotalAmount();
    }
   
  }
  
  GetCart(){
         this.userobj.GetCart(this.userobj.userId);
  }

}
