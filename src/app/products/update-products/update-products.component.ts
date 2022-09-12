import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {

  ProductId: any;
  ProductDetails: any;

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService,private router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((data: any) => {
      this.ProductId = data['id']
    })
    this.productService.viewProduct(this.ProductId).subscribe((item: any) => {
      this.ProductDetails = item
    })
  }

  updateProduct(form: any) {
    let updateProduct={
      id:form.value.id,
      productName:form.value.productName,
      categoryId:form.value.categoryId,
      description:form.value.description,
      price:form.value.price,
      is_available:form.value.is_available,
      productImg:form.value.productImg,
      rating:form.value.rating,
      review:form.value.review,
      vendor_name:form.value.vendor_name,
      warranty:form.value.warranty
    }
    this.productService.updateProduct(this.ProductId,updateProduct).subscribe((data:any)=>{
      alert("Update successfully")
      this.router.navigateByUrl("products")
    })
  }



}
