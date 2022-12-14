import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  cartLength:number;
  constructor(private userobj:UsersService) { }

  ngOnInit(): void {
    this.cartLength=this.userobj.cartLength;
  }

}
