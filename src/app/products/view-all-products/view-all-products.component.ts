import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  productList: any;
  filterCategory:any
  searchKey:any=""
  
  constructor(private productService: ProductService) {
    
   }

  ngOnInit(): void {
    this.productService.viewAllProduct().subscribe(data => {
      this.productList = data
      // console.log(this.productList);
      
      // this.productList.forEach((a: any) => {
      //   Object.assign(a, { quantity: 1, total: a.price });
      // })
   
    })

    this.productService.search.subscribe((value:any)=>{
      this.searchKey=value
    })

    
  }

  filter(category:any){//heading id
    this.filterCategory= this.productList.filter((item:any)=>{
      if(item.categoryId==category || category==''){
        return item
      }
    })

  }

}
