import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/app/food';
import { CartDetailsService } from 'src/app/services/cart-details.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loggedinUser:any;
  constructor(private service:OrderDetailsService,private router:Router,private cartservice:CartDetailsService) { }
  foodData:Food[]=[];
  // foodData:any;
  ngOnInit(): void {
    this.service.getData().subscribe(
      (data)=>{
        this.foodData = data;
      },(err)=>{
        console.log(err);
        
      }
    );
    
  }
  // products:any
  public item:any
  AddtoCarts(item:any){
   
    this.cartservice.addToCart(item)
    
  }

  loggedin(){
    this.loggedinUser =  localStorage.getItem('email');
    return this.loggedinUser
    }
  // onBuy(foodData:any){
  //   this.router.navigate(['/menu',foodData.id])
  // }
  // this.foodData = this.service.foodDetails;
}

