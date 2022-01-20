import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/food';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedinUser:any;
  constructor(private service:OrderDetailsService) { }
  foodss:Food[]=[];
  ngOnInit(): void {

    this.readData();
    // this.service.getData() 
  }
  readData(){ 
    this.service.getData().subscribe(
      (data)=>{
        this.foodss = data;
        // console.log(data);
      },(err)=>{
        console.log(err);
        
      }
    );
  }
  

}
