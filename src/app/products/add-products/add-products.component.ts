import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  addProductForm = this.formBuilder.group({
    id:[],
    productName:[""],
    categoryId: [""],
    description: [""],
    price:[],
    is_available:[""],
    productImg:[""],
    rating:[""],
    review:[""],
    vendor_name:[""],
    warranty:[""]
  })

  constructor(private formBuilder: FormBuilder,private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  addProduct() {
    let newProdut={
      id:this.addProductForm.value.id,
      productName:this.addProductForm.value.productName,
      categoryId:this.addProductForm.value.categoryId,
      description:this.addProductForm.value.description,
      price:this.addProductForm.value.price,
      is_available:this.addProductForm.value.is_available,
      productImg:this.addProductForm.value.productImg,
      rating:this.addProductForm.value.rating,
      review:this.addProductForm.value.review,
      vendor_name:this.addProductForm.value.vendor_name,
      warranty:this.addProductForm.value.warranty
    }
    this.productService.addProduct(newProdut).subscribe((data)=>{
      alert("New product added successfully")
      this.router.navigateByUrl("products")
    })
  }
}
