import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search=new BehaviorSubject("")//behaviour subject variable
  
  constructor(private httpClient: HttpClient) { }

  //API to get all product
  viewAllProduct() {
    const baseURL = "http://localhost:3000/products/"//server url to get all product from server
    return this.httpClient.get(baseURL)
  }
  //API call to get a single product
  viewProduct(productId:any){
    const baseURL = "http://localhost:3000/products/"+productId//server url to get all product from server
    return this.httpClient.get(baseURL)

  }

  //API call to delete a single product
  deleteProduct(productId:any){
    const baseURL = "http://localhost:3000/products/"+productId//server url to get all product from server
    return this.httpClient.delete(baseURL)

  }

    //API call to add a new product
    addProduct(productData:any){
      const baseURL = "http://localhost:3000/products/"//server url to get all product from server
      return this.httpClient.post(baseURL,productData)
  
    }

     //API call to update a  product
     updateProduct(productId:any,productData:any){
      const baseURL = "http://localhost:3000/products/"+productId//server url to get all product from server
      return this.httpClient.put(baseURL,productData)
  
    }

}
