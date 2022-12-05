import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder,FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/products-dashboard.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

   

  formValue:FormGroup;
  productsList:Product[]=[];
  productModelObj:Product=new Product();
  showAdd:boolean=false;
  showUpdate:boolean=false;
  productDetail:Product;
  constructor(private formBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      ProductName:[''],
      MfdDate:[''],
      ExpDate:[''],
      Price:[''],
      Stock:['']
    })

    this.getProducts();
  }

  clickAddProducts(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  clickEditProducts(){
    this.showAdd=false;
    this.showUpdate=true;
  }

  postProductDetails(){
    this.productModelObj.productName=this.formValue.value.ProductName;
    this.productModelObj.mfdDate=this.formValue.value.MfdDate;
    this.productModelObj.expDate=this.formValue.value.ExpDate;
    this.productModelObj.price=this.formValue.value.Price;
    this.productModelObj.stock=this.formValue.value.Stock;

    this.api.postProducts(this.productModelObj).subscribe((res)=>{
      console.log(res);
      alert('Product added successfully');
      let ref=document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getProducts();
    },
    err=>{
        alert('Something Went wrong');
    })
  }
  
  deleteProducts(product){
    this.api.deleteProducts(product.productId)
    .subscribe((res)=>{
      alert('Product Deleted');
      this.getProducts();
    })
   
  }
  
  getProducts()
  {
     this.api.getProducts().subscribe((res)=>{
        console.log(res);
        this.productsList=res;
           console.log(this.productsList.values);

      });
  }

  onEdit(product:any)
  {
        this.productModelObj.productId=product.productId;
        this.formValue.controls['ProductName'].setValue(product.productName);
        this.formValue.controls['MfdDate'].setValue(product.mfdDate);
        this.formValue.controls['ExpDate'].setValue(product.expDate);
        this.formValue.controls['Price'].setValue(product.price);
        this.formValue.controls['Stock'].setValue(product.stock);

  }
    
   updateProductDetails(){
    this.productModelObj.productName=this.formValue.value.ProductName;
    this.productModelObj.mfdDate=this.formValue.value.MfdDate;
    this.productModelObj.expDate=this.formValue.value.ExpDate;
    this.productModelObj.price=this.formValue.value.Price;
    this.productModelObj.stock=this.formValue.value.Stock;
    this.api.editProducts(this.productModelObj,this.productModelObj.productId)
    .subscribe((res)=>{
      console.log(res);
      alert('Product Updated');
      let ref=document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getProducts();


    })
   }
  
   
   productDetails(product){
     this.api.getProductDetails(product.productId)
    .subscribe((res)=>{
      this.productDetail.productId=res.productId;
    this.productDetail.productName=res.productName;
    this.productDetail.mfdDate=res.mfdDate;
    this.productDetail.expDate=res.expDate;
    this.productDetail.price=res.price;
    this.productDetail.stock=res.stock;
    })
  }

  
}
