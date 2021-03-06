import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDetailsService {

  public cartItems:any=[];
  public productList= new BehaviorSubject<any>([]) ;

  constructor() { }

  //we need to create getter and setter method to get the data
  //getter method
  getProduct(){
    return this.productList.asObservable();
  }

  //setter method
  setProduct(product:any){
    this.cartItems.push(...product);
    this.productList.next(product);
  }

  //add to cart
  addToCart(product:any){
    this.cartItems.push(product);
    this.productList.next(this.cartItems);
    console.log(this.cartItems);
    
  }

}
