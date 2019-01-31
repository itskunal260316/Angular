import { Product } from './product';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from, Observable } from 'rxjs';

@Injectable()       //DI
export class ProductService{

    products : Product[];

    constructor(private http:HttpClient){
        //inbuilt api of angular
    }


    sentToServer(product : Product){
        //our code to communicate with server will be here 

        }
    retrieveFromServer( url : string ) : Observable<Product[]>{
        //this is the code that will communicate with the server
        
      
       
       return this.http.get<Product[]>(url)
             //  let p1 = new Product(10,"Balaji",100);
        // let p2 = new Product(20,"Kurkure",150);
        // let p3= new Product(50,"Lays",200);
        // let products=[p1,p2,p3];
        // return products;
        }
    }