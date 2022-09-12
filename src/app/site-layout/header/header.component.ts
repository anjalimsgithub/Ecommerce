import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/products/cart.service';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
totalitemnumber:number=0
  searchTerm: any

  constructor(private productServiec:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe((res)=>{
      this.totalitemnumber=res.length;
    })
  }

  search(event:any){
    this.searchTerm=event.target.value
    this.productServiec.search.next(this.searchTerm)
  }
}
