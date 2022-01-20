import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedinUser:any;
  constructor(private service:OrderDetailsService,private router:Router) { }
  searchTerm:string='';
  
  ngOnInit(): void {
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    console.log(
     this.service.search.next(this.searchTerm));
  }
  logout(){
    localStorage.clear();

    this.router.navigate(['login']);
  }
  loggedin(){
  this.loggedinUser =  localStorage.getItem('email');
  return this.loggedinUser
  }

}
