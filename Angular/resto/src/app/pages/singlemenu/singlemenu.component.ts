import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/food';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-singlemenu',
  templateUrl: './singlemenu.component.html',
  styleUrls: ['./singlemenu.component.css']
})
export class SinglemenuComponent implements OnInit {

  //activatedroute show the current activated route details
  constructor(private service:OrderDetailsService,private param:ActivatedRoute) { }
  getMenuId:any;
  menuData:any;
  ngOnInit(): void {
    
    this.getMenuId = this.param.snapshot.paramMap.get('id')
    // console.log(this.getMenuId,'selected menu is');
    
    if(this.getMenuId){
                //  this.service.getData().subscribe((para)=>{
                //     console.log((para));
                //     return para.id == this.getMenuId;
                    
                //   })
    
     this.menuData= this.service.foodDetails.filter((value)=>{
        return value.id == this.getMenuId
        // if(value.id==this.getMenuId){
        //   return value
        // }
      })
      // console.log(this.menuData,"menu is");
      
    }
  }

}
