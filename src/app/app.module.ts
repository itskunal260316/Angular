import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductService } from './product/product-service';
import { AddProductComponent } from './product/add-product.component';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import { from } from 'rxjs';
import { ProductListComponent } from './product/product-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'add-prod', component: AddProductComponent},
      {path: 'pro-list', component: ProductListComponent},
    ])

  ],
  providers: [ProductService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
