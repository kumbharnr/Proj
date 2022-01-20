import { Component, OnInit } from '@angular/core';
import { CartDetailsService } from 'src/app/services/cart-details.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 
  public product:any=[];
  constructor(private service:CartDetailsService,private orderservice:OrderDetailsService) { }

  ngOnInit(): void {
    // this.orderservice.getData().subscribe((data)=>{
    //   this.product  = data;
    // })

    this.service.getProduct().subscribe((res)=>{
      this.product = res;
    })
  }

}
