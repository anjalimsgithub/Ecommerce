import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {

  productId:any;
  constructor(private router:Router,private productService:ProductService,private activatedRoue:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoue.params.subscribe((data:any)=>{
      this.productId=data['id']
    })
    this.productService.deleteProduct(this.productId).subscribe((item:any)=>{
      alert("product deleted successfully")
      this.router.navigateByUrl('products')
    })
  }

}
