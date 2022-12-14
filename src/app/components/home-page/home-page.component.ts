import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { ViewTemplatesComponent } from '../view-templates/view-templates.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  
  redirectToAction(){
    this.route.navigate([AdminLoginComponent]);
  }
}
