import { Component, OnInit } from '@angular/core';
import { Buyer } from 'src/app/models/buyer';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-buyer-form',
  templateUrl: './buyer-form.component.html',
  styleUrls: ['./buyer-form.component.css']
})
export class BuyerFormComponent implements OnInit {
  radioValue;
  BuyerObj:Buyer=new Buyer();
  constructor(private userObj:UsersService) { }
   TotalAmount:number;
  ngOnInit(): void {
          this.TotalAmount=this.userObj.TotalAmount;
  }
  radioChangeHandler(event){
    this.radioValue=event.target.value;
    console.log(event.target.value);
    console.log(this.radioValue);
           
  }
    AddBuyer(){
         this.BuyerObj.DateTime=new Date();
         this.BuyerObj.UserId=this.userObj.userId;
         this.BuyerObj.PaymentMode=this.radioValue
       this.userObj.BuyProducts(this.BuyerObj);
    }
}
