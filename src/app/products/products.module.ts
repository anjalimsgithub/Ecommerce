import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductsComponent,
    UpdateProductsComponent,
    DeleteProductsComponent,
    ViewProductsComponent,
    ViewAllProductsComponent,
    FilterPipe,
    CartComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductsModule { }
