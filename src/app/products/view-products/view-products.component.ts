import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  productId: any;
  // productData: any;
  productList: any;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.productId = data['id']
    })
    this.productService.viewProduct(this.productId).subscribe((item: any) => {
      this.productList = item

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      })
    })
  }


  addToCart(item: any) {
    this.cartService.addToCart(item)
  }

}
